#!groovy

// Jenkins Agents

def AGENT_FOR_BUILD = 'docker-dotnet-nodejs'
def AGENT_FOR_DOCKER = 'docker-dotnet-nodejs'
def AGENT_FOR_DEPLOY = 'docker-dotnet-nodejs'
def BUILD_NOTIFICATION_EMAIL = 'ContractAuditScrumTeam_DL@ds.uhc.com'


// Build, Test and Analyze Properties
def BUILD_ENVIRONMENT
def SONARQB_ENV = 'Sonar'

// DTR Publishing Properties
def DOCKER_IMAGE_TAG 
def DOCKER_IMAGE_REPO = 'docker.optum.com/contract_audit_tool/contractaudit-ui'
def DOCKERFILE_PATH = '.'
def DTR_CREDENTIALS_ID = '39df5d66-3825-484a-aa2d-5e378a62442e'

//Approval Workflow Properties
def STG_DEPLOYMENT_APPROVER_EMAIL = 'ContractAuditScrumTeam_DL@ds.uhc.com'
def STG_DEPLOYMENT_APPROVER = 'ContractAudit_DevOps_Team'
def STG_APPROVAL_TIMEOUT_DAYS = "5"

def PROD_DEPLOYMENT_APPROVER_EMAIL = 'ContractAuditScrumTeam_DL@ds.uhc.com'
def PROD_DEPLOYMENT_APPROVER = 'ContractAudit_DevOps_Team'
def PROD_APPROVAL_TIMEOUT_DAYS = "10"

// OSE Deployment Properties
def OSE_CLUSTER_DEV = 'OSECTC-CCAT-DEV' 
def OSE_CLUSTER_TEST = 'OSECTC-CCAT-TST' 
def OSE_CLUSTER_STAGE = 'OSECTC-CCAT-STG' 
def OSE_CLUSTER_PROD = 'OSECTC-CCAT-PROD' 

def OSE_APP_SERVICE = 'contractaudit-ui' 

def DEV_PENTEST_URL = 'http://ui-contractaudit-dev.ose-ctc-core.optum.com/'

@Library("com.optum.opi.jenkins.pipeline.library") _
try{

    env.IGNORE_PENTEST_FAILURE = "true"
    env.OSE_LOG_LEVEL = 3

    def safeBranchName = env.BRANCH_NAME.replaceAll("[/_.\$%^&*()@!]","-")
    DOCKER_IMAGE_TAG = safeBranchName

    if (env.BRANCH_NAME.contains("PR-")) {
        BUILD_ENVIRONMENT = 'devint'
        buildAngularApp(AGENT_FOR_BUILD, BUILD_ENVIRONMENT, SONARQB_ENV)
    }
    if (env.BRANCH_NAME.contains("feature/")) {
        BUILD_ENVIRONMENT = 'devint'
        buildAngularApp(AGENT_FOR_BUILD, BUILD_ENVIRONMENT, SONARQB_ENV)
        publishToDTR(AGENT_FOR_DOCKER, DOCKERFILE_PATH, DOCKER_IMAGE_REPO, DOCKER_IMAGE_TAG, DTR_CREDENTIALS_ID)
        deployToDev(AGENT_FOR_DEPLOY, OSE_CLUSTER_DEV, OSE_APP_SERVICE, DOCKER_IMAGE_REPO, DOCKER_IMAGE_TAG)
        runSeleniumTest("integration", "dev", "ci", "--testonly")
    }
    else if (env.BRANCH_NAME.contains("develop")) {
        BUILD_ENVIRONMENT = 'test'
        buildAngularApp(AGENT_FOR_BUILD, BUILD_ENVIRONMENT, SONARQB_ENV)
        // updateRallyTS("karma")
        publishToDTR(AGENT_FOR_DOCKER, DOCKERFILE_PATH, DOCKER_IMAGE_REPO, DOCKER_IMAGE_TAG, DTR_CREDENTIALS_ID)
        deployToTest(AGENT_FOR_DEPLOY, OSE_CLUSTER_TEST, OSE_APP_SERVICE, DOCKER_IMAGE_REPO, DOCKER_IMAGE_TAG)

        def regressionTests = [["regression", "--loc=remote --autoDiscover"]] as String[][]

        runSeleniumTest("e2e", "test", regressionTests)
    }
    else if (env.BRANCH_NAME.contains("master")) {
        BUILD_ENVIRONMENT = 'prod'
        buildAngularApp(AGENT_FOR_BUILD, BUILD_ENVIRONMENT, SONARQB_ENV)
        updateRallyTS("karma")
        DOCKER_IMAGE_TAG += env.BUILD_NUMBER
        publishToDTR(AGENT_FOR_DOCKER, DOCKERFILE_PATH, DOCKER_IMAGE_REPO, DOCKER_IMAGE_TAG, DTR_CREDENTIALS_ID)
        notifyAndWaitForApproval(PROD_DEPLOYMENT_APPROVER_EMAIL, PROD_DEPLOYMENT_APPROVER, PROD_APPROVAL_TIMEOUT_DAYS, "Production")
        deployToProd(AGENT_FOR_DEPLOY, OSE_CLUSTER_PROD, OSE_APP_SERVICE, DOCKER_IMAGE_REPO, DOCKER_IMAGE_TAG)
    }

    currentBuild.result = 'SUCCESS'
}
catch (err)
{
    echo "BUILD FAILURE ERROR: "
    echo "$err"
    currentBuild.result = 'FAILURE'

}

notifyBuildStatus(BUILD_NOTIFICATION_EMAIL)
