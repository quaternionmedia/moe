from hypothesis import given, example
from hypothesis.strategies import text, functions
from moe.log import log
from moe.speech import say
# from moe import printDb, moeSearch, moeInsert, clearDb


# @given()
# def test_printDb():
#     assert printDb()
#
# @given(text())
# def test_moeSearch(t):
#     assert moeSearch(t)
#
# @given(text())
# def test_moeInsert(t):
#     moeInsert(t)

@given(text())
def test_info_log(s):
    if(len(s)>0):
        assert log(s)

# def test_say():
#     assert say("one two one two")

# @given()
# def test_ClearDb():
#     assert clearDb()
