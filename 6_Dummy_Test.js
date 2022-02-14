/* Open protocol.html application and add "?name=1_Dummy_Test.js" at the end of url to test this file */
const data = {
    "testcase": "Dummy Test",
    "testcaseId": "Dummy Test Case Id",
    "testcaseHeading": "Read task list",
    "logdatas": [
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 168,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 2548,
            "origin": "default",
            "loggerName": "ipmitool.send",
            "timeStamp": "2019-07-05 18:03:52.156",
            "sentMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Request details ========\n\n========================================\nIpmiCli Cmd Request: RawRequest\nThread : Thread-2749\n========================================\nSyntax: ipmitool raw 0x38 0x56\nTimeout: null\nPrompt: null\n========================================\n",
            "receivedMessage": "====== Executor details =======\nExecutor class...........: dummy.package.ipmitool.sessions.IpmitoolDriverSession\n\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: Thread-2749\nExecution status.........: DONE\nExecution time...........: 47ms\nResponse.................: Could not open device at /dev/ipmi0 or /dev/ipmi/0 or /dev/ipmidev/0: No such file or directory\n",
            "level": "ERROR",
            "thread": "Thread-2749"
        },
        {
            "index": 162,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "Thread-2749"
        },
        {
            "index": 166,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "ERROR",
            "thread": "main"
        },
        {
            "index": 164,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.871",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: lsb_release -i\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResultdummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 78ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: Distributor ID:\tUbuntu\n",
            "level": "INFO",
            "thread": "main"
        },
        {
            "index": 165,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:54.967",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.cmdfw.commands.cli.CliCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; export HISTCONTROL=ignorespace; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 46ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: \n",
            "level": "WARNING",
            "thread": "main"
        },
        {
            "index": 167,
            "origin": "default",
            "loggerName": "cli.send",
            "timeStamp": "2019-07-24 01:49:55.235",
            "sentMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Request details ========\nClass....................: dummy.package.os.linux.commands.common.SimpleCmdRequest\nThread : ................: main\nExpected prompt..........: ^((?![&lt;?]|\\\\.{3}|(\\\\S+\\\\s){6,}).)*[&gt;#$%]+(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*\\\\s(\\\\\\\\u001B\\\\[(\\\\d;?)*[m|n|K])*$|#\\\\s\\\\u001B\\\\[6n\nPrompt forced............: false\nTimeout..................: 20000ms\nSyntax...................: echo START_COMMAND_OUTPUT; cat /opt/test/path/policy.json; echo END_COMMAND_OUTPUT\n",
            "receivedMessage": "====== Executor details =======\ndummy@dummyIP (tunneled:39516)\n====== Response details ========\nClass....................: dummy.package.cmdfw.results.CliCmdResult\nThread : ................: main\nExecution status.........: DONE\nExecution time...........: 66ms\nMatched prompt...........: dummy@host:~$ \nResponse.................: cat: /opt/test/path/policy.json: No such file or directory\n",
            "level": "INFO",
            "thread": "main"
        }
    ]
};