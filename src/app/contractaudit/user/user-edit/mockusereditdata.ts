export const MockUserEditData = {
    'meta': {
        'transaction_id': '7114e9a8-d52d-4b27-806b-b0b9e23818f9'
    },
    'resultMeta': {
        'pagination': {
            'start': 1,
            'totalresults': 1,
            'count': 1,
            'links': []
        }
    },
    'data': {
        'addDate': null,
        'addBy': 99999,
        'changeDate': null,
        'changeBy': 99999,
        'logicalDelete': false,
        'systemNotes': null,
        'firstName': 'Whitney',
        'lastName': 'Andrew',
        'middleName': null,
        'userName': 'wandrew1',
        'id': 1,
        'email': 'whitney.andrew@optum.com',
        'auditTeamId': 1,
        'auditTeamName': 'Team1',
        'payerId': 1,
        'payerName': 'UHC',
        'userBusinessSegments': [
            {
                'userId': 1,
                'businessSegmentId': 2,
                'businessSegmentName': 'Employer and Individual (E&I)'
            },
            {
                'userId': 1,
                'businessSegmentId': 3,
                'businessSegmentName': 'Medicare and Retirement (M&R)'
            }
        ],
        'roles': [
            {
                'userId': 1,
                'roleId': 1
            }
        ],
        'roleId': 1,
        'roleName': 'Administrator',
        'normalizedEmail': 'WHITNEY.ANDREW@OPTUM.COM',
        'normalizedUserName': 'WANDREW1',
        'errorMessage': null
    },
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

export const MockBusinessSegments = {
    'meta': {
        'transaction_id': 'facec49d-042e-4aef-a67a-975bfeced36d'
    },
    'resultMeta': {
        'pagination': {
            'start': 1,
            'totalresults': 1,
            'count': 1,
            'links': []
        }
    },
    'data': [
        {
            'rowId': 1,
            'name': 'Community and State (C&S)'
        },
        {
            'rowId': 2,
            'name': 'Employer and Individual (E&I)'
        },
        {
            'rowId': 3,
            'name': 'Medicare and Retirement (M&R)'
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

export const MockPayers = {
    'meta': {
        'transaction_id': 'facec49d-042e-4aef-a67a-975bfeced36d'
    },
    'resultMeta': {
        'pagination': {
            'start': 1,
            'totalresults': 1,
            'count': 1,
            'links': []
        }
    },
    'data': [
        {
            'rowId': 1,
            'name': 'UHG'
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

export const MockAuditTeams = {
    'meta': {
        'transaction_id': 'facec49d-042e-4aef-a67a-975bfeced36d'
    },
    'resultMeta': {
        'pagination': {
            'start': 1,
            'totalresults': 1,
            'count': 1,
            'links': []
        }
    },
    'data': [
        {
            'rowId': 1,
            'name': 'Team 1'
        },
        {
            'rowId': 2,
            'name': 'Team 2'
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


export const MockRoles = {
  'meta': {
    'transaction_id': '0fbee15a-74f5-44c7-a91a-8589edbcbedd'
  },
  'resultMeta': {
    'pagination': {
      'start': 1,
      'totalresults': 1,
      'count': 1,
      'links': []
    }
  },
  'data': [
    {
      'rowId': 1,
      'name': 'Administrator'
    },
    {
      'rowId': 2,
      'name': 'Team Lead'
    },
    {
      'rowId': 3,
      'name': 'Contract Maintenance User'
    },
    {
      'rowId': 4,
      'name': 'View Only User'
    },
    {
      'rowId': 5,
      'name': 'Claim Auditor'
    },
    {
      'rowId': 6,
      'name': 'Restricted Claim Auditor'
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

export const MockUsersData = {
  'meta': {
    'transaction_id': '467dfa29-fdc2-4d26-8f1c-3d36a1702f7b'
  },
  'resultMeta': {
    'pagination': {
      'start': 1,
      'totalresults': 1,
      'count': 1,
      'links': []
    }
  },
  'data': [
    {
      'addDate': '2017-07-08T18:20:10.037',
      'addBy': 999999,
      'changeDate': '2017-07-22T23:24:28.017',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Whitney',
      'lastName': 'Addrew',
      'middleName': 'B',
      'userName': 'wandrew1',
      'id': 1,
      'email': 'whitney.andrew@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'WHITNEY.ANDREW@OPTUM.COM',
      'normalizedUserName': 'WANDREW1'
    },
    {
      'addDate': '2017-07-12T13:03:28.437',
      'addBy': 999999,
      'changeDate': '2017-07-12T13:03:28.437',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Whit',
      'lastName': 'agg',
      'middleName': 'gasg',
      'userName': 'wandrew12',
      'id': 52,
      'email': 'w.a@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 52,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'W.A@OPTUM.COM',
      'normalizedUserName': 'WANDREW12'
    },
    {
      'addDate': '2017-07-18T19:55:12.333',
      'addBy': 999999,
      'changeDate': '2017-07-18T19:55:12.333',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'FURWeOfRrF',
      'lastName': 'aInnYuKpIF',
      'middleName': 'bb',
      'userName': 'aggy2Fu',
      'id': 1000052,
      'email': 'dqkpv423tldd@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000052,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'DQKPV423TLDD@OPTUM.COM',
      'normalizedUserName': 'AGGY2FU'
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
      'roleName': null,
      'normalizedEmail': 'BRAD.ARMPIT@OPTUM.COM',
      'normalizedUserName': 'BARMPIT1'
    },
    {
      'addDate': '2017-07-19T13:58:58.44',
      'addBy': 999999,
      'changeDate': '2017-07-19T13:58:58.44',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'EpORlndPBt',
      'lastName': 'aVMMicwGbm',
      'middleName': 'ac',
      'userName': 'GHd9bYh',
      'id': 1000065,
      'email': 'xwgun6e32e5z@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000065,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'XWGUN6E32E5Z@OPTUM.COM',
      'normalizedUserName': 'GHD9BYH'
    },
    {
      'addDate': '2017-07-18T20:16:18.207',
      'addBy': 999999,
      'changeDate': '2017-07-18T20:16:18.207',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'vSfcGSyqDY',
      'lastName': 'AXBFrAZJRk',
      'middleName': 'aa',
      'userName': 'Aj6rOR8',
      'id': 1000053,
      'email': '5zbzhfh56fka@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000053,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '5ZBZHFH56FKA@OPTUM.COM',
      'normalizedUserName': 'AJ6ROR8'
    },
    {
      'addDate': '2017-07-20T21:03:59.36',
      'addBy': 999999,
      'changeDate': '2017-07-20T19:17:19.777',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Me',
      'lastName': 'Be',
      'middleName': null,
      'userName': 'mb',
      'id': 1000072,
      'email': 'mb@mb.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000072,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'MB@MB.COM',
      'normalizedUserName': 'MB'
    },
    {
      'addDate': '2017-07-18T14:10:27.497',
      'addBy': 999999,
      'changeDate': '2017-07-18T14:10:27.497',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'George',
      'lastName': 'Bluth',
      'middleName': 'Michael',
      'userName': 'gbluth1',
      'id': 1000048,
      'email': 'George.Bluth@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000048,
          'roleId': 3
        }
      ],
      'roleId': 3,
      'roleName': null,
      'normalizedEmail': 'GEORGE.BLUTH@OPTUM.COM',
      'normalizedUserName': 'GBLUTH1'
    },
    {
      'addDate': '2017-07-18T14:13:25.547',
      'addBy': 999999,
      'changeDate': '2017-07-18T14:13:25.547',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'George',
      'lastName': 'Bluth',
      'middleName': null,
      'userName': 'gbluth2',
      'id': 1000049,
      'email': 'George.Bluth1@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000049,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'GEORGE.BLUTH1@OPTUM.COM',
      'normalizedUserName': 'GBLUTH2'
    },
    {
      'addDate': '2017-07-11T19:01:04.22',
      'addBy': 999999,
      'changeDate': '2017-07-11T19:01:04.22',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Jerimiah',
      'lastName': 'Bullfrog',
      'middleName': 'Wassa',
      'userName': 'jbullfrog',
      'id': 37,
      'email': 'jerimiah.bullfrog@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 37,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'JERIMIAH.BULLFROG@OPTUM.COM',
      'normalizedUserName': 'JBULLFROG'
    },
    {
      'addDate': '2017-07-19T21:36:03.607',
      'addBy': 999999,
      'changeDate': '2017-07-19T21:36:03.607',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'wNROBTWfAY',
      'lastName': 'cdynSWZnxa',
      'middleName': 'ba',
      'userName': '18j8rB6',
      'id': 1000068,
      'email': 'dbl8m3l85zd3@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000068,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'DBL8M3L85ZD3@OPTUM.COM',
      'normalizedUserName': '18J8RB6'
    },
    {
      'addDate': '2017-07-11T14:51:35.027',
      'addBy': 999999,
      'changeDate': '2017-07-11T14:51:35.027',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'wiley',
      'lastName': 'Coyote',
      'middleName': 'E',
      'userName': 'wcoyote1',
      'id': 32,
      'email': 'w@i.co',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 32,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'W@I.CO',
      'normalizedUserName': 'WCOYOTE1'
    },
    {
      'addDate': '2017-07-11T14:52:17.203',
      'addBy': 999999,
      'changeDate': '2017-07-11T14:52:17.203',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'wiley',
      'lastName': 'Coyote',
      'middleName': 'E',
      'userName': 'wcoyote2',
      'id': 33,
      'email': 'w@v.co',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 33,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'W@V.CO',
      'normalizedUserName': 'WCOYOTE2'
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
      'roleName': null,
      'normalizedEmail': 'B.DADDY@OPTUM.COM',
      'normalizedUserName': 'BDADDY1'
    },
    {
      'addDate': '2017-07-14T11:47:59.373',
      'addBy': 999999,
      'changeDate': '2017-07-14T11:47:59.373',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Big',
      'lastName': 'Daddy',
      'middleName': null,
      'userName': 'bdaddy2',
      'id': 1000011,
      'email': 'b.t@e.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000011,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'B.T@E.COM',
      'normalizedUserName': 'BDADDY2'
    },
    {
      'addDate': '2017-07-11T19:48:59.287',
      'addBy': 999999,
      'changeDate': '2017-07-11T19:48:59.287',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Jim',
      'lastName': 'Dandy',
      'middleName': 'E',
      'userName': 'jdandy1',
      'id': 41,
      'email': 'jim.dandy@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 41,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'JIM.DANDY@OPTUM.COM',
      'normalizedUserName': 'JDANDY1'
    },
    {
      'addDate': '2017-07-12T00:41:35.507',
      'addBy': 999999,
      'changeDate': '2017-07-12T00:41:35.507',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Finally',
      'lastName': 'DidIt',
      'middleName': 'Mark',
      'userName': 'mark1234',
      'id': 39,
      'email': 'mark.w@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 39,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'MARK.W@OPTUM.COM',
      'normalizedUserName': 'MARK1234'
    },
    {
      'addDate': '2017-07-14T19:08:24.837',
      'addBy': 999999,
      'changeDate': '2017-07-14T19:08:24.837',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'jxJcbdlnKj',
      'lastName': 'DkVTwmOfkr',
      'middleName': 'ba',
      'userName': 'Xkn3jth',
      'id': 1000017,
      'email': 'cqz3nc8s289s@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000017,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'CQZ3NC8S289S@OPTUM.COM',
      'normalizedUserName': 'XKN3JTH'
    },
    {
      'addDate': '2017-07-21T10:02:23.977',
      'addBy': 999999,
      'changeDate': '2017-07-21T10:02:23.977',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'aijdsjfoea',
      'lastName': 'dsafdsfd',
      'middleName': null,
      'userName': 'awge3gas',
      'id': 1000076,
      'email': 'isod@asfd.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000076,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'ISOD@ASFD.COM',
      'normalizedUserName': 'AWGE3GAS'
    },
    {
      'addDate': '2017-07-10T16:23:30.513',
      'addBy': 999999,
      'changeDate': '2017-07-21T14:26:47.517',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Test',
      'lastName': 'Dude',
      'middleName': 'tyy',
      'userName': 'tdude1',
      'id': 7,
      'email': 'test.dude1@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 7,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE1@OPTUM.COM',
      'normalizedUserName': 'TDUDE1'
    },
    {
      'addDate': '2017-07-10T16:31:22.63',
      'addBy': 999999,
      'changeDate': '2017-07-21T17:15:08.577',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'TestShins',
      'lastName': 'Dude',
      'middleName': '',
      'userName': 'tdude7',
      'id': 13,
      'email': 'test.dude7@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 13,
          'roleId': 6
        }
      ],
      'roleId': 6,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE7@OPTUM.COM',
      'normalizedUserName': 'TDUDE7'
    },
    {
      'addDate': '2017-07-10T16:27:46.743',
      'addBy': 999999,
      'changeDate': '2017-07-10T16:27:46.743',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Test2',
      'lastName': 'Dude2',
      'middleName': '',
      'userName': 'tdude2',
      'id': 8,
      'email': 'test.dude2@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 8,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE2@OPTUM.COM',
      'normalizedUserName': 'TDUDE2'
    },
    {
      'addDate': '2017-07-10T16:29:51.477',
      'addBy': 999999,
      'changeDate': '2017-07-10T16:29:51.477',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Test4',
      'lastName': 'Dude4',
      'middleName': '',
      'userName': 'tdude4',
      'id': 10,
      'email': 'test.dude4@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 10,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE4@OPTUM.COM',
      'normalizedUserName': 'TDUDE4'
    },
    {
      'addDate': '2017-07-10T16:30:33.127',
      'addBy': 999999,
      'changeDate': '2017-07-10T16:30:33.127',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Test5',
      'lastName': 'Dude5',
      'middleName': '',
      'userName': 'tdude5',
      'id': 11,
      'email': 'test.dude5@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 11,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE5@OPTUM.COM',
      'normalizedUserName': 'TDUDE5'
    },
    {
      'addDate': '2017-07-10T16:30:59.727',
      'addBy': 999999,
      'changeDate': '2017-07-10T16:30:59.727',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Test6',
      'lastName': 'Dude6',
      'middleName': '',
      'userName': 'tdude6',
      'id': 12,
      'email': 'test.dude6@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 12,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE6@OPTUM.COM',
      'normalizedUserName': 'TDUDE6'
    },
    {
      'addDate': '2017-07-10T16:31:46.42',
      'addBy': 999999,
      'changeDate': '2017-07-10T16:31:46.42',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Test8',
      'lastName': 'Dude8',
      'middleName': '',
      'userName': 'tdude8',
      'id': 14,
      'email': 'test.dude8@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 14,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE8@OPTUM.COM',
      'normalizedUserName': 'TDUDE8'
    },
    {
      'addDate': '2017-07-10T16:32:09.11',
      'addBy': 999999,
      'changeDate': '2017-07-10T16:32:09.11',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Test9',
      'lastName': 'Dude9',
      'middleName': '',
      'userName': 'tdude9',
      'id': 15,
      'email': 'test.dude9@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 15,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE9@OPTUM.COM',
      'normalizedUserName': 'TDUDE9'
    },
    {
      'addDate': '2017-07-10T16:34:16.11',
      'addBy': 999999,
      'changeDate': '2017-07-10T16:34:16.11',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Test9',
      'lastName': 'Dude9',
      'middleName': '',
      'userName': 'tdude10',
      'id': 16,
      'email': 'test.dude10@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 16,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE10@OPTUM.COM',
      'normalizedUserName': 'TDUDE10'
    },
    {
      'addDate': '2017-07-11T14:14:06.207',
      'addBy': 999999,
      'changeDate': '2017-07-08T18:20:10.027',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Christine',
      'lastName': 'Edwards',
      'middleName': null,
      'userName': 'cedwar17',
      'id': 30,
      'email': 'christine.edwards@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 30,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'CHRISTINE.EDWARDS.OPTUM.COM',
      'normalizedUserName': 'CEDWAR17'
    },
    {
      'addDate': '2017-07-18T17:45:30.63',
      'addBy': 999999,
      'changeDate': '2017-07-18T17:45:30.63',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'xeRsyvEgGh',
      'lastName': 'fAjAxSmxIe',
      'middleName': 'bc',
      'userName': 'cd1mYop',
      'id': 1000050,
      'email': 'oqsqjdf37twh@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000050,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'OQSQJDF37TWH@OPTUM.COM',
      'normalizedUserName': 'CD1MYOP'
    },
    {
      'addDate': '2017-07-12T15:25:31.65',
      'addBy': 999999,
      'changeDate': '2017-07-12T15:25:31.65',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'kQkIxVSNGn',
      'lastName': 'FfdYcrdKQd',
      'middleName': 'cc',
      'userName': 'XJ1h07E',
      'id': 55,
      'email': 'f70ph6z7fyt8@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 55,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'F70PH6Z7FYT8@OPTUM.COM',
      'normalizedUserName': 'XJ1H07E'
    },
    {
      'addDate': '2017-07-21T15:57:22.063',
      'addBy': 999999,
      'changeDate': '2017-07-21T15:57:22.063',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Brandon',
      'lastName': 'Flowers',
      'middleName': null,
      'userName': 'bflowers',
      'id': 1000078,
      'email': 'brandon.flowers@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000078,
          'roleId': 6
        }
      ],
      'roleId': 6,
      'roleName': null,
      'normalizedEmail': 'BRANDON.FLOWERS@OPTUM.COM',
      'normalizedUserName': 'BFLOWERS'
    },
    {
      'addDate': '2017-07-17T15:38:50.773',
      'addBy': 999999,
      'changeDate': '2017-07-17T15:38:50.773',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'yKqXfHsfpF',
      'lastName': 'foDpFlPiqj',
      'middleName': 'cc',
      'userName': 'mAtMt8O',
      'id': 1000027,
      'email': '4q6tn7y67emd@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000027,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '4Q6TN7Y67EMD@OPTUM.COM',
      'normalizedUserName': 'MATMT8O'
    },
    {
      'addDate': '2017-07-14T15:17:51.663',
      'addBy': 999999,
      'changeDate': '2017-07-14T15:17:51.663',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'MlpFnHrpSO',
      'lastName': 'fTYSMbALLF',
      'middleName': 'ca',
      'userName': 'B4oUEgs',
      'id': 1000008,
      'email': 'sefwa7b8z4lg@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000008,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'SEFWA7B8Z4LG@OPTUM.COM',
      'normalizedUserName': 'B4OUEGS'
    },
    {
      'addDate': '2017-07-18T21:31:18.693',
      'addBy': 999999,
      'changeDate': '2017-07-18T21:31:18.693',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'BFPvyPRuTR',
      'lastName': 'GBJMOaPHbq',
      'middleName': 'bb',
      'userName': '1HYLYXm',
      'id': 1000062,
      'email': 'akx6r3zx1nry@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000062,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'AKX6R3ZX1NRY@OPTUM.COM',
      'normalizedUserName': '1HYLYXM'
    },
    {
      'addDate': '2017-07-20T21:41:35.81',
      'addBy': 999999,
      'changeDate': '2017-07-20T21:41:35.81',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Dirty',
      'lastName': 'Harry',
      'middleName': null,
      'userName': 'dharry1',
      'id': 1000073,
      'email': 'dirty.harry@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000073,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'DIRTY.HARRY@OPTUM.COM',
      'normalizedUserName': 'DHARRY1'
    },
    {
      'addDate': '2017-07-17T15:22:05.207',
      'addBy': 999999,
      'changeDate': '2017-07-17T15:22:05.207',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Steve',
      'lastName': 'Harvey',
      'middleName': null,
      'userName': 'sharve1',
      'id': 1000024,
      'email': 's@h.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000024,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'S@H.COM',
      'normalizedUserName': 'SHARVE1'
    },
    {
      'addDate': '2017-07-20T00:52:19.433',
      'addBy': 999999,
      'changeDate': '2017-07-20T00:52:19.433',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'nMqRgqQISG',
      'lastName': 'HERQbNcUJC',
      'middleName': 'ab',
      'userName': '1fesQVN',
      'id': 1000069,
      'email': 'jxfc4nu1nahz@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000069,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'JXFC4NU1NAHZ@OPTUM.COM',
      'normalizedUserName': '1FESQVN'
    },
    {
      'addDate': '2017-07-20T17:33:10.237',
      'addBy': 999999,
      'changeDate': '2017-07-20T17:33:44.747',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'hgfdhgfhghg',
      'lastName': 'hgfdhgfhgfhgf',
      'middleName': null,
      'userName': 'dhgfdhgfh',
      'id': 1000074,
      'email': 'test@test32332.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000074,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'TEST@TEST32332.COM',
      'normalizedUserName': 'DHGFDHGFH'
    },
    {
      'addDate': '2017-07-21T15:22:55.61',
      'addBy': 999999,
      'changeDate': '2017-07-21T15:57:47.897',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Zeeman',
      'lastName': 'igdUxmaHhQ',
      'middleName': 'ba',
      'userName': 'MNR4VZa',
      'id': 1000077,
      'email': 'ncxn3ei9rgb5@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000077,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'NCXN3EI9RGB5@OPTUM.COM',
      'normalizedUserName': 'MNR4VZA'
    },
    {
      'addDate': '2017-07-17T15:14:58.463',
      'addBy': 999999,
      'changeDate': '2017-07-17T15:14:58.463',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'jENYiuJRDn',
      'lastName': 'iIqlaGkzYm',
      'middleName': 'ac',
      'userName': 'ZxhxFWS',
      'id': 1000023,
      'email': '72r5m1nzhyxt@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000023,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '72R5M1NZHYXT@OPTUM.COM',
      'normalizedUserName': 'ZXHXFWS'
    },
    {
      'addDate': '2017-07-12T13:01:05.27',
      'addBy': 999999,
      'changeDate': '2017-07-12T13:01:05.27',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'charli',
      'lastName': 'Ingram',
      'middleName': 'Kathleen',
      'userName': 'cingra3',
      'id': 51,
      'email': 'Charli@gmail.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 51,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'CHARLI@GMAIL.COM',
      'normalizedUserName': 'CINGRA3'
    },
    {
      'addDate': '2017-07-12T12:21:09.88',
      'addBy': 999999,
      'changeDate': '2017-07-12T12:21:09.88',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Sarah',
      'lastName': 'Ingram',
      'middleName': 'Kathleen',
      'userName': 'Singra4',
      'id': 46,
      'email': 'sarahhi1224@gmail.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 46,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'SARAHHI1224@GMAIL.COM',
      'normalizedUserName': 'SINGRA4'
    },
    {
      'addDate': '2017-07-17T15:44:28.027',
      'addBy': 999999,
      'changeDate': '2017-07-17T15:44:28.027',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Sarah',
      'lastName': 'Ingram',
      'middleName': '',
      'userName': 'Singra3',
      'id': 1000028,
      'email': 'sarah.ingram@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000028,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'SARAH.INGRAM@OPTUM.COM',
      'normalizedUserName': 'SINGRA3'
    },
    {
      'addDate': '2017-07-17T15:47:25.303',
      'addBy': 999999,
      'changeDate': '2017-07-17T15:47:25.303',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Sarah',
      'lastName': 'Ingram',
      'middleName': null,
      'userName': 'sarahhi1',
      'id': 1000029,
      'email': 'sarah.ingram1@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000029,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'SARAH.INGRAM1@OPTUM.COM',
      'normalizedUserName': 'SARAHHI1'
    },
    {
      'addDate': '2017-07-21T17:19:02.733',
      'addBy': 999999,
      'changeDate': '2017-07-21T17:19:33.797',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Jackson',
      'middleName': null,
      'userName': 'rjackson',
      'id': 1000079,
      'email': 'ryan.jackson@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000079,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'RYAN.JACKSON@OPTUM.COM',
      'normalizedUserName': 'RJACKSON'
    },
    {
      'addDate': '2017-07-17T15:24:40.423',
      'addBy': 999999,
      'changeDate': '2017-07-17T15:24:40.423',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'erBcLNGyXV',
      'lastName': 'jJKFayjFDM',
      'middleName': 'bc',
      'userName': 'aWYllHF',
      'id': 1000025,
      'email': 'q306i296waja@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000025,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'Q306I296WAJA@OPTUM.COM',
      'normalizedUserName': 'AWYLLHF'
    },
    {
      'addDate': '2017-07-12T01:22:42.137',
      'addBy': 999999,
      'changeDate': '2017-07-12T01:22:42.137',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Tom',
      'lastName': 'Jones',
      'middleName': 'E',
      'userName': 'tjones1',
      'id': 44,
      'email': 't.jones@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 44,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'T.JONES@OPTUM.COM',
      'normalizedUserName': 'TJONES1'
    },
    {
      'addDate': '2017-07-18T20:35:04.66',
      'addBy': 999999,
      'changeDate': '2017-07-18T20:35:04.66',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'wLNHGHFobo',
      'lastName': 'jVZZshRCsL',
      'middleName': 'bb',
      'userName': 'VkTe3ee',
      'id': 1000055,
      'email': 'rkkt4ki7phwo@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000055,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'RKKT4KI7PHWO@OPTUM.COM',
      'normalizedUserName': 'VKTE3EE'
    },
    {
      'addDate': '2017-07-14T19:04:13.657',
      'addBy': 999999,
      'changeDate': '2017-07-14T19:04:13.657',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'XNDhGvIkYh',
      'lastName': 'JZjhlmYFbJ',
      'middleName': 'ac',
      'userName': 'VbULTvH',
      'id': 1000015,
      'email': '0z8f2f2w1bw8@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000015,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '0Z8F2F2W1BW8@OPTUM.COM',
      'normalizedUserName': 'VBULTVH'
    },
    {
      'addDate': '2017-07-17T18:54:23.95',
      'addBy': 999999,
      'changeDate': '2017-07-17T18:54:23.95',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'WIKnLtRPpE',
      'lastName': 'JZwcPaQiWa',
      'middleName': 'aa',
      'userName': '1NGEWK9',
      'id': 1000033,
      'email': 'z9rbfsfqqw2f@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000033,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'Z9RBFSFQQW2F@OPTUM.COM',
      'normalizedUserName': '1NGEWK9'
    },
    {
      'addDate': '2017-07-17T17:32:36.327',
      'addBy': 999999,
      'changeDate': '2017-07-17T17:32:36.327',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'wilYePhdLC',
      'lastName': 'jZzGeykRoy',
      'middleName': 'bb',
      'userName': 'TWcGl0H',
      'id': 1000032,
      'email': 'rcg41wre63ck@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000032,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'RCG41WRE63CK@OPTUM.COM',
      'normalizedUserName': 'TWCGL0H'
    },
    {
      'addDate': '2017-07-20T19:20:26.05',
      'addBy': 999999,
      'changeDate': '2017-07-21T09:42:30.933',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'New',
      'lastName': 'Kid',
      'middleName': null,
      'userName': 'hlhkhh',
      'id': 1000075,
      'email': 'nj.mk@123.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000075,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'NJ.MK@123.COM',
      'normalizedUserName': 'HLHKHH'
    },
    {
      'addDate': '2017-07-18T20:59:42.363',
      'addBy': 999999,
      'changeDate': '2017-07-18T20:59:42.363',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'nwXPFehtVf',
      'lastName': 'kuqcfNQqqI',
      'middleName': 'ac',
      'userName': 'o1yFhMF',
      'id': 1000056,
      'email': 'b1221sztefmn@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000056,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'B1221SZTEFMN@OPTUM.COM',
      'normalizedUserName': 'O1YFHMF'
    },
    {
      'addDate': '2017-07-17T14:54:45.963',
      'addBy': 999999,
      'changeDate': '2017-07-17T14:54:45.963',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'gGioSFoOaY',
      'lastName': 'LbAzHpuvXe',
      'middleName': 'cc',
      'userName': 'b9hbXGf',
      'id': 1000021,
      'email': 'j4t2cg0878rl@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000021,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'J4T2CG0878RL@OPTUM.COM',
      'normalizedUserName': 'B9HBXGF'
    },
    {
      'addDate': '2017-07-11T14:54:54.827',
      'addBy': 999999,
      'changeDate': '2017-07-11T14:54:54.827',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Foghorn',
      'lastName': 'Leghorn',
      'middleName': 'E',
      'userName': 'fleghorn1',
      'id': 34,
      'email': 'q@g.co',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 34,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'Q@G.CO',
      'normalizedUserName': 'FLEGHORN1'
    },
    {
      'addDate': '2017-07-13T20:15:18.42',
      'addBy': 999999,
      'changeDate': '2017-07-13T20:15:18.42',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'PBbicpLlPX',
      'lastName': 'lhQHlgGcgn',
      'middleName': 'bc',
      'userName': 'PCyKIPP',
      'id': 63,
      'email': '4ejx19uan0fi@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 63,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '4EJX19UAN0FI@OPTUM.COM',
      'normalizedUserName': 'PCYKIPP'
    },
    {
      'addDate': '2017-07-12T15:36:18.743',
      'addBy': 999999,
      'changeDate': '2017-07-12T15:36:18.743',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'fbEkXEemHi',
      'lastName': 'LIeKYvURQq',
      'middleName': 'bb',
      'userName': '4F7YBZF',
      'id': 56,
      'email': '6t4t3q8q3btd@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 56,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '6T4T3Q8Q3BTD@OPTUM.COM',
      'normalizedUserName': '4F7YBZF'
    },
    {
      'addDate': '2017-07-18T11:58:54.423',
      'addBy': 999999,
      'changeDate': '2017-07-18T11:58:54.423',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'CDPRjvtflD',
      'lastName': 'LUSspkdCvS',
      'middleName': 'ba',
      'userName': 'xY67PCJ',
      'id': 1000046,
      'email': 'r9p8qk57lcjg@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000046,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'R9P8QK57LCJG@OPTUM.COM',
      'normalizedUserName': 'XY67PCJ'
    },
    {
      'addDate': '2017-07-18T21:29:09.46',
      'addBy': 999999,
      'changeDate': '2017-07-18T21:29:09.46',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'wRkPanaLel',
      'lastName': 'LvyeYmTZtb',
      'middleName': 'bc',
      'userName': 'Mh6SaAT',
      'id': 1000061,
      'email': 'h51l7pwp8q0r@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000061,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'H51L7PWP8Q0R@OPTUM.COM',
      'normalizedUserName': 'MH6SAAT'
    },
    {
      'addDate': '2017-07-16T14:47:16.34',
      'addBy': 999999,
      'changeDate': '2017-07-16T14:47:16.34',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Super',
      'lastName': 'Man',
      'middleName': null,
      'userName': 'sman1',
      'id': 1000020,
      'email': 's.man@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000020,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'S.MAN@OPTUM.COM',
      'normalizedUserName': 'SMAN1'
    },
    {
      'addDate': '2017-07-11T15:03:12.23',
      'addBy': 999999,
      'changeDate': '2017-07-11T15:03:12.23',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Milo',
      'lastName': 'Marantz',
      'middleName': 'J',
      'userName': 'mmarantz1',
      'id': 35,
      'email': 'b@i.co',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 35,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'B@I.CO',
      'normalizedUserName': 'MMARANTZ1'
    },
    {
      'addDate': '2017-07-10T16:28:18.71',
      'addBy': 999999,
      'changeDate': '2017-07-21T10:27:33.633',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Paul',
      'lastName': 'McCartney',
      'middleName': null,
      'userName': 'tdude3',
      'id': 9,
      'email': 'test.dude3@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 9,
          'roleId': 5
        }
      ],
      'roleId': 5,
      'roleName': null,
      'normalizedEmail': 'TEST.DUDE3@OPTUM.COM',
      'normalizedUserName': 'TDUDE3'
    },
    {
      'addDate': '2017-07-22T19:56:30.43',
      'addBy': 999999,
      'changeDate': '2017-07-22T19:59:21.89',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Audit',
      'lastName': 'NameChanged',
      'middleName': 'test',
      'userName': 'auser',
      'id': 1000080,
      'email': 'audit.user@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000080,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'AUDIT.USER@OPTUM.COM',
      'normalizedUserName': 'AUSER'
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
      'roleName': null,
      'normalizedEmail': 'V@Y.CO',
      'normalizedUserName': 'BNEWHART1'
    },
    {
      'addDate': '2017-07-18T20:19:57.157',
      'addBy': 999999,
      'changeDate': '2017-07-18T20:19:57.157',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'VwhJbitwTP',
      'lastName': 'NQXzkUMPos',
      'middleName': 'ac',
      'userName': '784Dsnr',
      'id': 1000054,
      'email': 'dmzzcjk23l63@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000054,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'DMZZCJK23L63@OPTUM.COM',
      'normalizedUserName': '784DSNR'
    },
    {
      'addDate': '2017-07-14T19:06:10.993',
      'addBy': 999999,
      'changeDate': '2017-07-14T19:06:10.993',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'TxHKcquVtA',
      'lastName': 'OvTXwInsZx',
      'middleName': 'ac',
      'userName': 'HU68lyl',
      'id': 1000016,
      'email': '1cki72dc1jm5@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000016,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '1CKI72DC1JM5@OPTUM.COM',
      'normalizedUserName': 'HU68LYL'
    },
    {
      'addDate': '2017-07-10T16:41:29.843',
      'addBy': 999999,
      'changeDate': '2017-07-10T23:25:13.677',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Justin',
      'lastName': 'Paschal',
      'middleName': '',
      'userName': 'jpascha1',
      'id': 18,
      'email': 'paschal.justin@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 18,
          'roleId': 5
        }
      ],
      'roleId': 5,
      'roleName': null,
      'normalizedEmail': 'PASCHAL.JUSTIN@OPTUM.COM',
      'normalizedUserName': 'JPASCHA1'
    },
    {
      'addDate': '2017-07-10T23:27:36.943',
      'addBy': 999999,
      'changeDate': '2017-07-11T00:08:17.753',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Justin1',
      'lastName': 'Paschal',
      'middleName': '',
      'userName': 'jpascha11',
      'id': 27,
      'email': 'paschal1.justin@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 27,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'PASCHAL1.JUSTIN@OPTUM.COM',
      'normalizedUserName': 'JPASCHA11'
    },
    {
      'addDate': '2017-07-11T19:34:46.6',
      'addBy': 999999,
      'changeDate': '2017-07-11T19:34:46.6',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Dom',
      'lastName': 'Perignon',
      'middleName': 'E',
      'userName': 'dperignon1',
      'id': 38,
      'email': 'dom.perignon@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 38,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'DOM.PERIGNON@OPTUM.COM',
      'normalizedUserName': 'DPERIGNON1'
    },
    {
      'addDate': '2017-07-12T15:52:14.723',
      'addBy': 999999,
      'changeDate': '2017-07-12T15:52:14.723',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'sfWoyCPGEL',
      'lastName': 'PojivAIBcy',
      'middleName': 'ca',
      'userName': 'JnaeJG7',
      'id': 57,
      'email': 'z1e76gaydfnb@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 57,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'Z1E76GAYDFNB@OPTUM.COM',
      'normalizedUserName': 'JNAEJG7'
    },
    {
      'addDate': '2017-07-17T15:31:16.76',
      'addBy': 999999,
      'changeDate': '2017-07-17T15:31:16.76',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'SBOgDbAcwp',
      'lastName': 'PuVuKqPxnj',
      'middleName': 'ac',
      'userName': 'd1o85FK',
      'id': 1000026,
      'email': 'ympbaazp6983@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000026,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'YMPBAAZP6983@OPTUM.COM',
      'normalizedUserName': 'D1O85FK'
    },
    {
      'addDate': '2017-07-12T19:09:11.387',
      'addBy': 999999,
      'changeDate': '2017-07-12T19:09:11.387',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'NdpPOdbHkX',
      'lastName': 'pZfpWXjXky',
      'middleName': 'cc',
      'userName': 'W4aqW8A',
      'id': 60,
      'email': 'ap2bgr21u364@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 60,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'AP2BGR21U364@OPTUM.COM',
      'normalizedUserName': 'W4AQW8A'
    },
    {
      'addDate': '2017-07-12T12:22:10.313',
      'addBy': 999999,
      'changeDate': '2017-07-12T12:22:10.313',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Manfred',
      'lastName': 'Richtoffen',
      'middleName': 'Von',
      'userName': 'mrichto',
      'id': 47,
      'email': 'manfred.richtoffen@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 47,
          'roleId': 5
        }
      ],
      'roleId': 5,
      'roleName': null,
      'normalizedEmail': 'MANFRED.RICHTOFFEN@OPTUM.COM',
      'normalizedUserName': 'MRICHTO'
    },
    {
      'addDate': '2017-07-10T16:37:24.843',
      'addBy': 999999,
      'changeDate': '2017-07-10T16:37:24.843',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Eddie',
      'lastName': 'Rickenbacker',
      'middleName': '',
      'userName': 'ericken',
      'id': 17,
      'email': 'eddie.rickenbacker@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 17,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'EDDIE.RICKENBACKER@OPTUM.COM',
      'normalizedUserName': 'ERICKEN'
    },
    {
      'addDate': '2017-07-13T21:38:46.723',
      'addBy': 999999,
      'changeDate': '2017-07-13T21:38:46.723',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Moe',
      'lastName': 'Rising',
      'middleName': 'Joe',
      'userName': 'mrising1',
      'id': 64,
      'email': 'e@j.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 64,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'E@J.COM',
      'normalizedUserName': 'MRISING1'
    },
    {
      'addDate': '2017-07-19T21:15:05.247',
      'addBy': 999999,
      'changeDate': '2017-07-19T21:15:05.247',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'vCtLbQHtTQ',
      'lastName': 'RjunlzKMQm',
      'middleName': 'ca',
      'userName': 'sgot1fc',
      'id': 1000067,
      'email': 'jx6e8ekxrqn4@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000067,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'JX6E8EKXRQN4@OPTUM.COM',
      'normalizedUserName': 'SGOT1FC'
    },
    {
      'addDate': '2017-07-11T14:03:49.023',
      'addBy': 999999,
      'changeDate': '2017-07-11T14:03:49.023',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Yosemite',
      'lastName': 'Sam',
      'middleName': 's',
      'userName': 'ysam1',
      'id': 29,
      'email': 'ysam@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 29,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'YSAM@OPTUM.COM',
      'normalizedUserName': 'YSAM1'
    },
    {
      'addDate': '2017-07-18T12:00:32.887',
      'addBy': 999999,
      'changeDate': '2017-07-18T12:00:32.887',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'USLkqwFGAT',
      'lastName': 'SaTYhtGExU',
      'middleName': 'ca',
      'userName': 'Vt7FBdk',
      'id': 1000047,
      'email': 'rqf29jfqsu1a@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000047,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'RQF29JFQSU1A@OPTUM.COM',
      'normalizedUserName': 'VT7FBDK'
    },
    {
      'addDate': '2017-07-18T07:08:29.267',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:08:29.267',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites1',
      'id': 1000035,
      'email': 'ryan.sites1@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000035,
          'roleId': 3
        }
      ],
      'roleId': 3,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES1@OPTUM.COM',
      'normalizedUserName': 'RSITES1'
    },
    {
      'addDate': '2017-07-18T07:09:56.217',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:09:56.217',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites2',
      'id': 1000036,
      'email': 'ryan.sites2@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000036,
          'roleId': 3
        }
      ],
      'roleId': 3,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES2@OPTUM.COM',
      'normalizedUserName': 'RSITES2'
    },
    {
      'addDate': '2017-07-18T07:19:07.657',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:19:07.657',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites3',
      'id': 1000037,
      'email': 'ryan.sites3@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000037,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES3@OPTUM.COM',
      'normalizedUserName': 'RSITES3'
    },
    {
      'addDate': '2017-07-18T07:20:45.983',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:20:45.983',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites4',
      'id': 1000038,
      'email': 'ryan.sites4@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000038,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES4@OPTUM.COM',
      'normalizedUserName': 'RSITES4'
    },
    {
      'addDate': '2017-07-18T07:21:20.737',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:21:20.737',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites5',
      'id': 1000039,
      'email': 'ryan.sites5@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000039,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES5@OPTUM.COM',
      'normalizedUserName': 'RSITES5'
    },
    {
      'addDate': '2017-07-18T07:22:54.643',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:22:54.643',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites6',
      'id': 1000040,
      'email': 'ryan.sites6@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000040,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES6@OPTUM.COM',
      'normalizedUserName': 'RSITES6'
    },
    {
      'addDate': '2017-07-18T07:32:27.79',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:32:27.79',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites7',
      'id': 1000041,
      'email': 'ryan.sites7@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000041,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES7@OPTUM.COM',
      'normalizedUserName': 'RSITES7'
    },
    {
      'addDate': '2017-07-18T07:32:42.127',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:32:42.127',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites8',
      'id': 1000042,
      'email': 'ryan.sites8@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000042,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES8@OPTUM.COM',
      'normalizedUserName': 'RSITES8'
    },
    {
      'addDate': '2017-07-18T07:33:50.32',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:33:50.32',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites9',
      'id': 1000043,
      'email': 'ryan.sites9@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000043,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES9@OPTUM.COM',
      'normalizedUserName': 'RSITES9'
    },
    {
      'addDate': '2017-07-18T07:34:54.853',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:34:54.853',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites10',
      'id': 1000044,
      'email': 'ryan.sites10@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000044,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES10@OPTUM.COM',
      'normalizedUserName': 'RSITES10'
    },
    {
      'addDate': '2017-07-18T07:35:09.067',
      'addBy': 999999,
      'changeDate': '2017-07-18T07:35:09.067',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Ryan',
      'lastName': 'Sites',
      'middleName': null,
      'userName': 'rsites11',
      'id': 1000045,
      'email': 'ryan.sites11@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000045,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'RYAN.SITES11@OPTUM.COM',
      'normalizedUserName': 'RSITES11'
    },
    {
      'addDate': '2017-07-12T12:42:54.7',
      'addBy': 999999,
      'changeDate': '2017-07-12T12:42:54.7',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'John',
      'lastName': 'Smith',
      'middleName': 'Jacob',
      'userName': 'jsmith1',
      'id': 49,
      'email': 'johnsmith@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 49,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'JOHNSMITH@OPTUM.COM',
      'normalizedUserName': 'JSMITH1'
    },
    {
      'addDate': '2017-07-12T12:46:24.447',
      'addBy': 999999,
      'changeDate': '2017-07-12T12:46:24.447',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'John',
      'lastName': 'Smith',
      'middleName': 'Jacob',
      'userName': 'jsmith11',
      'id': 50,
      'email': 'johnsmith1@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 50,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'JOHNSMITH1@OPTUM.COM',
      'normalizedUserName': 'JSMITH11'
    },
    {
      'addDate': '2017-07-12T14:15:28.597',
      'addBy': 999999,
      'changeDate': '2017-07-12T14:15:28.597',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'John',
      'lastName': 'Smith',
      'middleName': 'Jacob',
      'userName': 'jsmith12',
      'id': 53,
      'email': 'johnsmith12@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 53,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'JOHNSMITH12@OPTUM.COM',
      'normalizedUserName': 'JSMITH12'
    },
    {
      'addDate': '2017-07-16T13:39:41.34',
      'addBy': 999999,
      'changeDate': '2017-07-16T13:39:41.34',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Sam',
      'lastName': 'Smith',
      'middleName': null,
      'userName': 'ssmith123',
      'id': 1000018,
      'email': 'ssmith@somewhere.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000018,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'SSMITH@SOMEWHERE.COM',
      'normalizedUserName': 'SSMITH123'
    },
    {
      'addDate': '2017-07-16T13:41:13.22',
      'addBy': 999999,
      'changeDate': '2017-07-16T13:41:13.22',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Sammy',
      'lastName': 'Smith',
      'middleName': null,
      'userName': 'ssmith234',
      'id': 1000019,
      'email': 'ssmith234@somewhere.come',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000019,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'SSMITH234@SOMEWHERE.COME',
      'normalizedUserName': 'SSMITH234'
    },
    {
      'addDate': '2017-07-12T16:59:09.877',
      'addBy': 999999,
      'changeDate': '2017-07-12T16:59:09.877',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'WHYpjkrIMK',
      'lastName': 'SpwKhkDopw',
      'middleName': 'cc',
      'userName': 'ZLoCdNw',
      'id': 59,
      'email': '5j7dz0s1xiaf@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 59,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '5J7DZ0S1XIAF@OPTUM.COM',
      'normalizedUserName': 'ZLOCDNW'
    },
    {
      'addDate': '2017-07-18T02:27:43.06',
      'addBy': 999999,
      'changeDate': '2017-07-18T02:27:43.06',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Jason',
      'lastName': 'Statham',
      'middleName': null,
      'userName': 'jstatham1',
      'id': 1000034,
      'email': 'jason.statham@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000034,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'JASON.STATHAM@OPTUM.COM',
      'normalizedUserName': 'JSTATHAM1'
    },
    {
      'addDate': '2017-07-13T15:22:00.053',
      'addBy': 999999,
      'changeDate': '2017-07-13T15:22:00.053',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'YNUmNSLqIh',
      'lastName': 'SWqJjNrsxq',
      'middleName': 'ab',
      'userName': 'KHHY8dA',
      'id': 62,
      'email': 'rchzy302ak4g@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 62,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'RCHZY302AK4G@OPTUM.COM',
      'normalizedUserName': 'KHHY8DA'
    },
    {
      'addDate': '2017-07-19T00:50:12.317',
      'addBy': 999999,
      'changeDate': '2017-07-19T00:50:12.317',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'ZgZxavlSGA',
      'lastName': 'szwRTYKxhs',
      'middleName': 'cb',
      'userName': '5KIqvcT',
      'id': 1000064,
      'email': 'h734tu5in6a5@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000064,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'H734TU5IN6A5@OPTUM.COM',
      'normalizedUserName': '5KIQVCT'
    },
    {
      'addDate': '2017-07-18T21:06:43.077',
      'addBy': 999999,
      'changeDate': '2017-07-18T21:06:43.077',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'test',
      'lastName': 'test',
      'middleName': null,
      'userName': 'wandrew13',
      'id': 1000058,
      'email': 'mwarner8@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000058,
          'roleId': 3
        }
      ],
      'roleId': 3,
      'roleName': null,
      'normalizedEmail': 'MWARNER8@OPTUM.COM',
      'normalizedUserName': 'WANDREW13'
    },
    {
      'addDate': '2017-07-17T12:43:43.413',
      'addBy': 999999,
      'changeDate': '2017-07-17T12:43:43.413',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Entity',
      'lastName': 'Test',
      'middleName': 'FrameWork',
      'userName': 'eftest',
      'id': 1000031,
      'email': 'eftest@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000031,
          'roleId': 5
        }
      ],
      'roleId': 5,
      'roleName': null,
      'normalizedEmail': 'EFTEST@OPTUM.COM',
      'normalizedUserName': 'EFTEST'
    },
    {
      'addDate': '2017-07-11T13:05:39.207',
      'addBy': 999999,
      'changeDate': '2017-07-18T21:09:29.167',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'testgg',
      'lastName': 'testa',
      'middleName': null,
      'userName': 'bbunny1',
      'id': 28,
      'email': 'bugs@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 28,
          'roleId': 3
        }
      ],
      'roleId': 3,
      'roleName': null,
      'normalizedEmail': 'BUGS@OPTUM.COM',
      'normalizedUserName': 'BBUNNY1'
    },
    {
      'addDate': '2017-07-18T21:09:00.123',
      'addBy': 999999,
      'changeDate': '2017-07-18T21:11:47.663',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'testgg',
      'lastName': 'testa',
      'middleName': null,
      'userName': 'eIQC8WJ',
      'id': 1000060,
      'email': 'xu09ve1q85cj@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000060,
          'roleId': 3
        }
      ],
      'roleId': 3,
      'roleName': null,
      'normalizedEmail': 'XU09VE1Q85CJ@OPTUM.COM',
      'normalizedUserName': 'EIQC8WJ'
    },
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
      'roleName': null,
      'normalizedEmail': 'BOB@OPTUM.COM',
      'normalizedUserName': 'BTESTYCALL'
    },
    {
      'addDate': '2017-07-11T19:45:41.533',
      'addBy': 999999,
      'changeDate': '2017-07-11T19:45:41.533',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Tom',
      'lastName': 'Thumb',
      'middleName': 'D',
      'userName': 'tthumb1',
      'id': 40,
      'email': 'tom.thumb@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 40,
          'roleId': 4
        }
      ],
      'roleId': 4,
      'roleName': null,
      'normalizedEmail': 'TOM.THUMB@OPTUM.COM',
      'normalizedUserName': 'TTHUMB1'
    },
    {
      'addDate': '2017-07-18T21:02:08.887',
      'addBy': 999999,
      'changeDate': '2017-07-18T21:02:08.887',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'poldOzXzMv',
      'lastName': 'TmtOxhrIZT',
      'middleName': 'ba',
      'userName': 'ODVJeIU',
      'id': 1000057,
      'email': '4o143jx4ju1k@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000057,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '4O143JX4JU1K@OPTUM.COM',
      'normalizedUserName': 'ODVJEIU'
    },
    {
      'addDate': '2017-07-13T23:26:19.977',
      'addBy': 999999,
      'changeDate': '2017-07-22T14:45:56.363',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'System',
      'lastName': 'User',
      'middleName': null,
      'userName': 'SystemUser',
      'id': 999999,
      'email': 'system.user@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 999999,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'SYSTEM.USER@OPTUM.COM',
      'normalizedUserName': 'SYSTEMUSER'
    },
    {
      'addDate': '2017-07-17T14:57:13.477',
      'addBy': 999999,
      'changeDate': '2017-07-17T14:57:13.477',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'oMGKPDXYZL',
      'lastName': 'VzvpsqilYf',
      'middleName': 'bb',
      'userName': 'H9A9Tvl',
      'id': 1000022,
      'email': 'j9iyvw3r1m3k@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000022,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'J9IYVW3R1M3K@OPTUM.COM',
      'normalizedUserName': 'H9A9TVL'
    },
    {
      'addDate': '2017-07-08T23:55:00.173',
      'addBy': 999999,
      'changeDate': '2017-07-21T17:14:28.213',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Mark',
      'lastName': 'Warner',
      'middleName': 'D',
      'userName': 'mwarner8',
      'id': 6,
      'email': 'mark.warner@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 6,
          'roleId': 5
        }
      ],
      'roleId': 5,
      'roleName': null,
      'normalizedEmail': 'MARK.WARNER@OPTUM.COM',
      'normalizedUserName': 'MWARNER8'
    },
    {
      'addDate': '2017-07-13T23:47:56.913',
      'addBy': 999999,
      'changeDate': '2017-07-13T23:47:56.913',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Mark3',
      'lastName': 'Warner',
      'middleName': '',
      'userName': 'mwarner83',
      'id': 1000003,
      'email': 'mark.warner83@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000003,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'MARK.WARNER83@OPTUM.COM',
      'normalizedUserName': 'MWARNER83'
    },
    {
      'addDate': '2017-07-13T23:45:50.177',
      'addBy': 999999,
      'changeDate': '2017-07-13T23:45:50.177',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Mark8',
      'lastName': 'Warner',
      'middleName': '',
      'userName': 'mwarner88',
      'id': 1000001,
      'email': 'mark.warner88@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000001,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'MARK.WARNER88@OPTUM.COM',
      'normalizedUserName': 'MWARNER88'
    },
    {
      'addDate': '2017-07-13T23:46:43.947',
      'addBy': 999999,
      'changeDate': '2017-07-13T23:46:43.947',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Mark8',
      'lastName': 'Warner',
      'middleName': '',
      'userName': 'mwarner888',
      'id': 1000002,
      'email': 'mark.warner888@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000002,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'MARK.WARNER888@OPTUM.COM',
      'normalizedUserName': 'MWARNER888'
    },
    {
      'addDate': '2017-07-11T14:17:15.21',
      'addBy': 999999,
      'changeDate': '2017-07-18T14:26:48.407',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Markzz',
      'lastName': 'Warner',
      'middleName': '',
      'userName': 'mmichaels1',
      'id': 31,
      'email': 'z@e.co',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 31,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'Z@E.CO',
      'normalizedUserName': 'MMICHAELS1'
    },
    {
      'addDate': '2017-07-17T16:08:41.127',
      'addBy': 999999,
      'changeDate': '2017-07-17T16:08:41.127',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'qrSPAxcsCX',
      'lastName': 'wEACUNjLPd',
      'middleName': 'ca',
      'userName': 'dudpwG1',
      'id': 1000030,
      'email': '2mu211dhqlah@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000030,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': '2MU211DHQLAH@OPTUM.COM',
      'normalizedUserName': 'DUDPWG1'
    },
    {
      'addDate': '2017-07-12T16:49:37.437',
      'addBy': 999999,
      'changeDate': '2017-07-12T16:49:37.437',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'XtyNbRALYM',
      'lastName': 'WGpuyrDuit',
      'middleName': 'ab',
      'userName': 'rWDFvVj',
      'id': 58,
      'email': 'o1hiv7i9onb6@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 58,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'O1HIV7I9ONB6@OPTUM.COM',
      'normalizedUserName': 'RWDFVVJ'
    },
    {
      'addDate': '2017-07-13T15:18:15.24',
      'addBy': 999999,
      'changeDate': '2017-07-13T15:18:15.24',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'LOtXqwoSJy',
      'lastName': 'wHtZuryhQT',
      'middleName': 'bb',
      'userName': 'yA2Bjkf',
      'id': 61,
      'email': 'i60zj0mst4fd@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 61,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'I60ZJ0MST4FD@OPTUM.COM',
      'normalizedUserName': 'YA2BJKF'
    },
    {
      'addDate': '2017-07-20T14:27:43.497',
      'addBy': 999999,
      'changeDate': '2017-07-20T14:27:43.497',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'HOfYSJlEgo',
      'lastName': 'WZfKsiEpqd',
      'middleName': 'ba',
      'userName': 'H6pgTbs',
      'id': 1000071,
      'email': 'khwaeeyaekgq@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000071,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'KHWAEEYAEKGQ@OPTUM.COM',
      'normalizedUserName': 'H6PGTBS'
    },
    {
      'addDate': '2017-07-19T20:50:28.667',
      'addBy': 999999,
      'changeDate': '2017-07-19T20:50:28.667',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'THGFDNssRC',
      'lastName': 'XuoJJBXIxh',
      'middleName': 'ab',
      'userName': 'rKXPtiV',
      'id': 1000066,
      'email': 'kyq9skdplsfa@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000066,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'KYQ9SKDPLSFA@OPTUM.COM',
      'normalizedUserName': 'RKXPTIV'
    },
    {
      'addDate': '2017-07-12T12:25:35.02',
      'addBy': 999999,
      'changeDate': '2017-07-12T12:25:35.02',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Alvin',
      'lastName': 'York',
      'middleName': 'D',
      'userName': 'ayork',
      'id': 48,
      'email': 'alvin.york@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 48,
          'roleId': 3
        }
      ],
      'roleId': 3,
      'roleName': null,
      'normalizedEmail': 'ALVIN.YORK@OPTUM.COM',
      'normalizedUserName': 'AYORK'
    },
    {
      'addDate': '2017-07-18T14:30:40.743',
      'addBy': 999999,
      'changeDate': '2017-07-18T14:30:40.743',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Alvin',
      'lastName': 'York',
      'middleName': '',
      'userName': 'ayork1',
      'id': 1000051,
      'email': 'alvin1.york@optum.com',
      'auditTeamId': 2,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000051,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': null,
      'normalizedEmail': 'ALVIN1.YORK@OPTUM.COM',
      'normalizedUserName': 'AYORK1'
    },
    {
      'addDate': '2017-07-20T13:50:45.547',
      'addBy': 999999,
      'changeDate': '2017-07-20T13:50:45.547',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'fUvIGNEXzT',
      'lastName': 'ZPdZmqyEFR',
      'middleName': 'bb',
      'userName': 'JX0BhxH',
      'id': 1000070,
      'email': 'baqkmj2r9zxh@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000070,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'BAQKMJ2R9ZXH@OPTUM.COM',
      'normalizedUserName': 'JX0BHXH'
    },
    {
      'addDate': '2017-07-18T23:08:59.367',
      'addBy': 999999,
      'changeDate': '2017-07-18T23:08:59.367',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'MQNzSFKylU',
      'lastName': 'ZqsIXZCpvL',
      'middleName': 'cc',
      'userName': 'utxxjb0',
      'id': 1000063,
      'email': 'iwgr420lvr5z@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 1000063,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'IWGR420LVR5Z@OPTUM.COM',
      'normalizedUserName': 'UTXXJB0'
    },
    {
      'addDate': '2017-07-12T15:07:38.417',
      'addBy': 999999,
      'changeDate': '2017-07-12T15:07:38.417',
      'changeBy': 999999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'pUtPqFurCj',
      'lastName': 'ZWEFiyKJmA',
      'middleName': 'cc',
      'userName': '3yob7PP',
      'id': 54,
      'email': 'xg34whaq50nt@optum.com',
      'auditTeamId': 1,
      'auditTeamName': null,
      'payerId': 1,
      'payerName': null,
      'userBusinessSegments': null,
      'roles': [
        {
          'userId': 54,
          'roleId': 2
        }
      ],
      'roleId': 2,
      'roleName': null,
      'normalizedEmail': 'XG34WHAQ50NT@OPTUM.COM',
      'normalizedUserName': '3YOB7PP'
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
