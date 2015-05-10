app.controller('homeController', HomeController)
    
HomeController.$inject = ['$scope']

function HomeController($scope) {
	var vm = this;
	vm.inputMessage = "";
	vm.encode = true;
	vm.parseInput = function(){
		var inn = vm.inputMessage,
		out = vm.outputMessage;

		out = listGenerator(inn);
		out = listCount(out);
		
		vm.outputMessage = out;
	};
	vm.outputMessage = "";

	var teststring = 'hi hi bye hello hi hi bye hello hi hi bye hello';


	//takes string representing a paragraph
	//returns a list of words
	var listGenerator = function (text) {
		return text.split(" ");
	}

	//takes: array of word strings
	//returns: array of {'word',frequency} pairs
	var listCount = function (alist){
		var frequencyCount = [],
		i,j;
		for (i=0; i< alist.length; i++){
			for(j = 0; j < frequencyCount.length; j++){
				
				if(frequencyCount[j].word === alist[i]){
				
					frequencyCount[j].freq += 1;
					break;
				}
			}
			frequencyCount.push(
				{
					word: alist[i],
					freq: 1
				}
			);
		}
		return frequencyCount;
	}

	//takes: list of word freq pairs
	//gives: list sorted by freq
	var OrderByFreq = function (countObjs) {
		var i;

		countObjs.sort(function(thisObj, theNextObj){
			if(thisObj.freq < theNextObj.freq){
				return -1;
			}
			if(thisObj.freq > theNextObj.freq){
				return 1;
			}
			return 0;
		})
		return countObjs;
	}

	//#5. create a data structure for nod (parent, child left/right, pair)
	//takes: pair obj {word, freq}, parent Node, child Node left/right, all optional
	//this is a class/object/datastructure and can be instantiated
	function Node (pair, aParent, childLeft, childRight){
		this._pair = pair;
		this._parent = aParent;
		this._childLeft = childLeft;
		this._chidlRight = childRight;
	}

	//#6. create queue with insert and combine methods
	function PriorityQueue () {
		
		this._queue = [];
		this.populateQueue = function (input) {
			var i,
				tempNode;
			for(i = 0; i < input.length; i++){
				tempNode = new Node(input[i]);
				this._queue.push(tempNode);
			}
		}
		this.get = function () {
			return this._queue;
		}
		this.pop = function () {
			if(this._queue.legth < 1){
				return null
			}
			this._queue
		}
		this.insert = function (huffman) {
			this._queue.push(huffman);
		}

		this.merge = function () {

		}
	}

    //----------------------------------------------------------------------//
    //																		//
    //					//QUICK TESTING FRAMEWORK LIBRARY//					//
	//																		//	
	//----------------------------------------------------------------------//

	// TEST RESULTS
	vm.testResults = [];

	// RUN TESTS FUNCTION
	function runTests () {
		TESTOrderByFreq.run();
	}

	// TEST RESULT CLASS
	function TestResult (name, message, result) {
		this.testName = name;
		this.message = message;
		this.state = result;
	}

	// TEST CLASS
	function Test (callback) {
		this.run = callback;
	}

    //----------------------------------------------------------------------//
    //																		//
    //								//TESTS//								//
	//																		//	
	//----------------------------------------------------------------------//

	//TEST: OrderByFreq
	//CHECKS: is the output the input sorted?
	var TESTOrderByFreq = new Test(function () {
		var unsortedList = [],
			sortedList = [],
			finalList,
			result;

		 unsortedList = [
			{word: "hi", freq: 5},
			{word: "zebra", freq: 18},
			{word: "dog", freq: 4},
			{word: "kitty", freq: 2},
			{word: "casper", freq: 13},
			{word: "nugget", freq: 11}
		];

		sortedList = [
			unsortedList[3],
			unsortedList[2],
			unsortedList[0],
			unsortedList[5],
			unsortedList[4],
			unsortedList[1]
		];

		finalList = OrderByFreq(unsortedList);

		if(finalList.length != sortedList.length){
			vm.testResults.push(new TestResult("TESTOrderByFreq", "Input and output arrays are of different length.", false));
			return;
		};

		for(i = 0; i < finalList.length; i++){
			if(finalList[i].word != sortedList[i].word || finalList[i].freq != sortedList[i].freq){
				vm.testResults.push(new TestResult("TESTOrderByFreq", "Property values differ starting at index: " + i, false));
				return
			}
		}

		vm.testResults.push(new TestResult("TESTOrderByFreq", "Test Passes, arrays are equal", true))
	});

    //----------------------------------------------------------------------//
    //																		//
    //								//INIT//								//
	//						(this function will run on page load)			//	
	//----------------------------------------------------------------------//
	
	(function init () {
		runTests();
	}())
}


