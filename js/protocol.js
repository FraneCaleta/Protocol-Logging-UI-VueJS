function loadData() {
    /* Cuts file name from url */
    var fileName = location.href.substring(location.href.indexOf("=") + 1);

    require(['./' + fileName], function (foo) {
        /* File is now loaded */
        initializeVue();
    })
}
/* Loading data */
loadData();

function initializeVue() {
    return new Vue({
        el: '#app',
        data() {
            return {
                items: data.logdatas,
                selected: [],
                fields: [{
                    text: 'Timestamp',
                    value: {
                        key: 'timeStamp',
                        label: 'Timestamp',
                        sortable: true,
                        class: 'text-center'
                    }
                },
                {
                    text: 'Level',
                    value: {
                        key: 'level',
                        label: 'Level',
                        sortable: true,
                        class: 'text-center'
                    }
                },
                {
                    text: 'Protocol',
                    value: {
                        key: 'loggerName',
                        label: 'Protocol',
                        sortable: true,
                        class: 'text-center'
                    }
                },
                {
                    text: 'Sent Message',
                    value: {
                        key: 'sentMessage',
                        label: 'Sent Message',
                        class: 'text-center'
                    }
                },
                {
                    text: 'Received Message',
                    value: {
                        key: 'receivedMessage',
                        label: 'Received Message',
                        class: 'text-center'
                    }
                },
                {
                    text: 'Thread',
                    value: {
                        key: 'thread',
                        label: 'Thread',
                        sortable: true,
                        class: 'text-center'
                    }
                }
                ],
                totalRows: 1,
                currentPage: 1,
                perPage: 25,
                pageOptions: [
                    { value: 10, text: "10" },
                    { value: 25, text: "25" },
                    { value: 50, text: "50" },
                    { value: 75, text: "75" },
                    { value: 100, text: "100" },
                    { value: 200, text: "200" },
                    { value: 300, text: "300" },
                    { value: 500, text: "500" },
                    { value: -1, text: "All" }
                ],
                sortBy: null,
                sortDesc: false,
                filter: null,
                small: false,
                bordered: false,
                _showDetails: false
            }
        },
        computed: {
            /* Filtering and mapping selected items */
            activeFields() {
                return this.fields.filter(x => this.selected.includes(x.value)).map(x => x.value);
            },
            /* Checking which protocol is being used */
            cptItems() {
                return this.items.map(item => {
                    if (item.loggerName.toLowerCase().includes('cli')) {
                        item.loggerName = "Command Line (CLI)";
                    } else if (item.loggerName.toLowerCase().includes('rest')) {
                        item.loggerName = "REST";
                    } else if (item.loggerName.toLowerCase().includes('ipmitool')) {
                        item.loggerName = "IPMI Tool"
                    }
                    item.sender = item.loggerName.substr(0, item.loggerName.indexOf('.'));
                    return item;
                });
            }
        },
        mounted() {
            /* Sets the initial number of items */
            this.totalRows = this.items.length;
        },
        methods: {
            copy(message) {
                let res = message.split("\n");
                console.log(message);
                for (let i in res) {
                    if (res[i].indexOf("Syntax") != -1) {
                        let syntax = res[i].split(':');
                        let syntaxClean = syntax[1].slice(1);
                        this.copyToClipboard(syntaxClean);
                    }
                }
            },
            copyToClipboard(text) {
                let dummyElement = document.createElement("textarea");
                document.body.appendChild(dummyElement);
                dummyElement.value = text;
                dummyElement.select();
                document.execCommand("copy");
                document.body.removeChild(dummyElement);
            },
            /* Coloring rows depending on their level (info, warning, error) */
            rowClass(item) {
                if (!item) {
                    return;
                }
                if (item.level === 'ERROR' || item.loggerName.toLowerCase().includes('error')) {
                    return 'table-danger';
                } else if (item.level === "WARNING" || item.loggerName.toLowerCase().includes("warning")) {
                    return 'table-warning';
                } else if (item.level === 'INFO' || item.loggerName.toLowerCase().includes("info")) {
                    return 'table-success';
                }
            },
            /* Appending test case name to html so it loads asynchronously with rest of the code */
            appendTestCaseName() {
                $(".test-case-name").append("Protocol Log for testcase: <strong>" + data.testcase + "</strong>")
            },
            /* Appending test case heading to html so it loads asynchronously with rest of the code */
            appendTestCaseHeading() {
                $(".test-case-heading").append("Test case heading: <strong>" + data.testcaseHeading + "</strong>");
            },
            /* Appending test case id to html so it loads asynchronously with rest of the code */
            appendTestCaseId() {
                $(".test-case-id").append("Test case ID: <strong>" + data.testcaseId + "</strong>");
            }
        },
        created() {
            /* Creating fields */
            this.selected = this.fields.map(field => field.value);
            /* Creating methods for appending */
            this.appendTestCaseName();
            this.appendTestCaseHeading();
            this.appendTestCaseId();
        },
    });
}