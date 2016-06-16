// list of tests
var tests = [[String: AnyObject]]()

// do the test
func test<T: Equatable>(data: String, expectation: T, testCase: () -> T) {
    tests.append([
        "data": data,
        "expectation": "\(expectation)",
        "result": "\(testCase())",
        "pass": testCase() == expectation
    ])
}

func end() {
    do {
        let json = try NSJSONSerialization.dataWithJSONObject(tests, options: .PrettyPrinted)
        print(String(data: json, encoding: NSUTF8StringEncoding)!)
    } catch {
        print("{ error: True }")
    }
}

/// test case
test("b1;g1;b8;g8", expectation: true) {
    return whoseTurn("b1;g1;b8;g8")
}

/// test case
test("c3;g1;b8;g8", expectation: false) {
    return whoseTurn("c3;g1;b8;g8")
}

/// test case
test("g1;g2;g3;g4", expectation: true) {
    return whoseTurn("g1;g2;g3;g4")
}

/// test case
test("f8;h1;f3;c2", expectation: true) {
    return whoseTurn("f8;h1;f3;c2")
}

end()