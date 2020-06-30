from jsonschema import Draft7Validator

# TODO: move to datatypes folder
nodeschema = {
     "type" : "object",
     "properties" : {
         "id" : {"type" : "number"},
         "data" : {"type" : "object"},
     },
     "required":[
               "id",
               "data"
            ]
}

edgeschema = {
     "type" : "object",
     "properties" : {
         "id" : {"type" : "number"},
         "source" : {"type" : "number"},
         "dest" : {"type" : "number"},
         "weight" : {"type" : "object"}
     },
     "required":[
               "id",
               "source",
               "dest"
            ]
}

graphschema = {
     "type" : "object",
     "properties" : {
         "nodes" : {"type" : "array",
            "items":nodeschema},
         "edges" : {"type" : "array",
            "items":edgeschema},
     },
     "required":[
               "nodes",
               "edges"
            ]
}

# TODO: 
# def isObj(str):
#     return parse.forJson(str)

def isNode(obj):
    v = Draft7Validator(nodeschema)
    return v.is_valid(obj)

def isEdge(obj):
    v = Draft7Validator(edgeschema)
    return v.is_valid(obj)

def isGraph(obj):
    v = Draft7Validator(graphschema)
    return v.is_valid(obj)



if __name__ == '__main__':
    tests = [{"id" : 65, "data" : {}},
            {"id" : 65, "data" : 'tjena'},
            {"id" : 65},
            {"id" : True, "data" : {}}
            ]

    for test in tests:
        print(isNode(test))
        print(isEdge(test))
        print(isGraph(test))
