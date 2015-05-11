app.controller('homeController', HomeController)
    
HomeController.$inject = ['$scope']

function HomeController($scope) {
	var vm = this;
	vm.inputMessage = 'hi hi bye hello hi hi bye hello hi hi bye hello this is an awesome text string thing heya';
	vm.encode = true;
	vm.parseInput = function(){
		var inn = vm.inputMessage,
		out = vm.outputMessage;

		out = ListGenerator(inn);
		out = GetFrequencyObjects(out);
		out = OrderNodeByFreq(out);

		//create priority queue
		var queue = new PriorityQueue();
		//instantiate it with values from list of sorted word/frequency objects
		queue.populateQueue(out);
		vm.queue = queue.getQueue();

		vm.outputMessage = out;
	};
	vm.outputMessage = "";

	


	//takes string representing a paragraph
	//returns a list of words
	var ListGenerator = function (text) {
		return text.split(" ");
	}

	//takes: array of word strings
	//returns: array of {'word',frequency} pairs
	var GetFrequencyObjects = function (alist){
		
		var frequencyCount = [],
			found,i,j;

		for (i=0; i< alist.length; i++){
			found = false;
			for(j = 0; j < frequencyCount.length; j++){
				
				if(frequencyCount[j].word === alist[i]){
				
					frequencyCount[j].freq += 1;
					found = true;
				}
			}
			if(found === false){
				frequencyCount.push({word: alist[i], freq: 1});		
			}
		}
		return frequencyCount;
	}


	//takes: list of word freq pairs
	//gives: list of nodes sorted by freq
	var OrderNodeByFreq = function (countObjs) {
		var i;

		countObjs.sort(function(thisObj, theNextObj){
			if(thisObj.pair.freq < theNextObj.pair.freq){
				return -1;
			}
			if(thisObj.pair.freq > theNextObj.pair.freq){
				return 1;
			}
			return 0;
		})
		return countObjs;
	}

	//#5. create a data structure for nod (parent, child left/right, pair
	//this is a class/object/datastructure and can be instantiated
	function Node () {
		this.pair = null;
		this.rent = null;
		this.childLeft = null;
		this.childRight = null;
	}

	//#6. create queue with insert and combine methods
	function PriorityQueue () {
		
		this._queue = [];
		this._huffman = [];

		this.populateQueue = function (input) {
			var i,
				tempNode;
			for(i = 0; i < input.length; i++){
				tempNode = new Node();
				tempNode.pair = input[i];
				this._queue.push(tempNode);
			}
		}

		this.getQueue = function () {
			return this._queue;
		}

		this.getHuffman = function () {
			return this._huffman;
		}

		this.pop = function () {
			if(this._queue.length < 1){
				return null;
			}
			return this._queue.splice(0,1);
		}

		this.insert = function (node) {
			this._queue.push(node);
		}

		this.merge = function () {
			this
		}

		this.createHuffman = function () {
			var tempQ = this._queue,
				nodeParent,
				nodeLeft,
				nodeRight;

			while(tempQ.length > 1){
				nodeLeft = this.pop();
				nodeRight = this.pop();
				nodeParent = new Node();
				nodeParent.childRight
			} 
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
			{pair:{word: "hi", freq: 5}},
			{pair:{word: "zebra", freq: 18}},
			{pair:{word: "dog", freq: 4}},
			{pair:{word: "kitty", freq: 2}},
			{pair:{word: "casper", freq: 13}},
			{pair:{word: "nugget", freq: 11}}
		];

		sortedList = [
			unsortedList[3],
			unsortedList[2],
			unsortedList[0],
			unsortedList[5],
			unsortedList[4],
			unsortedList[1]
		];

		finalList = OrderNodeByFreq(unsortedList);

		if(finalList.length != sortedList.length){
			vm.testResults.push(new TestResult("TESTOrderByFreq", "Input and output arrays are of different length.", false));
			return;
		};

		for(i = 0; i < finalList.length; i++){
			if(finalList[i].pair.word != sortedList[i].pair.word || finalList[i].pair.freq != sortedList[i].pair.freq){
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


