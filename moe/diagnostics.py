import pytest
from pytest_jsonreport.plugin import JSONReport
from datetime import datetime as dt
from moe.log import log


def t():
    return dt.now().strftime("%Y%m%d%H%M%S")

def runSelfTest():
    filename = f'output/{t()}report.json'
    plugin = JSONReport()
    pytest.main(['../tests/test_log.py'], plugins=[plugin])
    log(plugin.report)
    plugin.save_report(filename)
