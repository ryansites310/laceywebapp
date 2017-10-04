export const MockUserListData =
    {
        'meta': {
            'transaction_id': '383ff491-eacf-4c31-a102-56ef76deb6d9'
        },
        'resultMeta': {
            'pagination': {
                'start': 0,
                'totalresults': 5,
                'count': 5,
                'links': []
            }
        },
        'data': [
            {
                'addDate': '2017-07-10T23:30:31.467',
                'addBy': 999999,
                'changeDate': '2017-07-10T23:30:31.467',
                'changeBy': 999999,
                'logicalDelete': false,
                'systemNotes': null,
                'firstName': 'Bob',
                'lastName': 'Tester',
                'middleName': 'T',
                'userName': 'btestycall',
                'id': 26,
                'email': 'bob@optum.com',
                'auditTeamId': 1,
                'auditTeamName': null,
                'payerId': 1,
                'payerName': null,
                'userBusinessSegments': null,
                'roles': [
                    {
                        'userId': 26,
                        'roleId': 1
                    }
                ],
                'roleId': 1,
                'roleName': 'Administrator',
                'normalizedEmail': 'BOB@OPTUM.COM',
                'normalizedUserName': 'BTESTYCALL',
                'errorMessage': null
            },
            {
                'addDate': '2017-07-11T13:05:39.207',
                'addBy': 0,
                'changeDate': '2017-07-11T13:05:39.207',
                'changeBy': 0,
                'logicalDelete': false,
                'systemNotes': null,
                'firstName': 'bugs ',
                'lastName': 'bunny',
                'middleName': 'b',
                'userName': 'bbunny1',
                'id': 28,
                'email': 'bugs@optum.com',
                'auditTeamId': 1,
                'auditTeamName': null,
                'payerId': 1,
                'payerName': null,
                'userBusinessSegments': null,
                'roles': [
                    {
                        'userId': 28,
                        'roleId': 4
                    }
                ],
                'roleId': 4,
                'roleName': 'View Only User',
                'normalizedEmail': 'BUGS@OPTUM.COM',
                'normalizedUserName': 'BBUNNY1',
                'errorMessage': null
            },
            {
                'addDate': '2017-07-11T15:22:58.31',
                'addBy': 999999,
                'changeDate': '2017-07-11T15:22:58.31',
                'changeBy': 999999,
                'logicalDelete': false,
                'systemNotes': null,
                'firstName': 'Bob',
                'lastName': 'Newhart',
                'middleName': 'B',
                'userName': 'bnewhart1',
                'id': 36,
                'email': 'v@y.co',
                'auditTeamId': 1,
                'auditTeamName': null,
                'payerId': 1,
                'payerName': null,
                'userBusinessSegments': null,
                'roles': [
                    {
                        'userId': 36,
                        'roleId': 4
                    }
                ],
                'roleId': 4,
                'roleName': 'View Only User',
                'normalizedEmail': 'V@Y.CO',
                'normalizedUserName': 'BNEWHART1',
                'errorMessage': null
            },
            {
                'addDate': '2017-07-11T20:02:32.85',
                'addBy': 999999,
                'changeDate': '2017-07-11T20:02:32.85',
                'changeBy': 999999,
                'logicalDelete': false,
                'systemNotes': null,
                'firstName': 'Brad',
                'lastName': 'Armpit',
                'middleName': 'E',
                'userName': 'barmpit1',
                'id': 42,
                'email': 'brad.armpit@optum.com',
                'auditTeamId': 2,
                'auditTeamName': null,
                'payerId': 1,
                'payerName': null,
                'userBusinessSegments': null,
                'roles': [
                    {
                        'userId': 42,
                        'roleId': 4
                    }
                ],
                'roleId': 4,
                'roleName': 'View Only User',
                'normalizedEmail': 'BRAD.ARMPIT@OPTUM.COM',
                'normalizedUserName': 'BARMPIT1',
                'errorMessage': null
            },
            {
                'addDate': '2017-07-11T20:10:37.2',
                'addBy': 999999,
                'changeDate': '2017-07-11T20:10:37.2',
                'changeBy': 999999,
                'logicalDelete': false,
                'systemNotes': null,
                'firstName': 'Big',
                'lastName': 'Daddy',
                'middleName': 'O',
                'userName': 'bdaddy1',
                'id': 43,
                'email': 'b.daddy@optum.com',
                'auditTeamId': 2,
                'auditTeamName': null,
                'payerId': 1,
                'payerName': null,
                'userBusinessSegments': null,
                'roles': [
                    {
                        'userId': 43,
                        'roleId': 4
                    }
                ],
                'roleId': 4,
                'roleName': 'View Only User',
                'normalizedEmail': 'B.DADDY@OPTUM.COM',
                'normalizedUserName': 'BDADDY1',
                'errorMessage': null
            }
        ],
        'status': {
            'messages': [
                {
                    'code': '200',
                    'name': 'ok',
                    'severity': 'normal',
                    'description': 'ok'
                }
            ]
        }
    };

    export const MockUserListDataError =
    {
        'meta': {
            'transaction_id': '383ff491-eacf-4c31-a102-56ef76deb6d9'
        },
        'resultMeta': {
            'pagination': {
                'start': 0,
                'totalresults': 5,
                'count': 5,
                'links': []
            }
        },
        'data': [ {} ],
        'status': {
            'messages': [
                {
                    'code': '500',
                    'name': 'error',
                    'severity': 'error',
                    'description': 'an error occurred'
                }
            ]
        }
    };
