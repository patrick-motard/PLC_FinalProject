app.controller('homeController', HomeController)
    
HomeController.$inject = ['$scope']

function HomeController($scope) {
	var ourPara = 'Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent jhorn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!';
	var teststring = 'hi hi bye hello hi hi bye hello hi hi bye hello';
	var separate = function (text) {
	
	};
	//takes string representing a paragraph
	//returns a list of words
	var listGenerator = function (text) {

		$scope.main = text.split(" ");

	}
	var listCount = function (list){
		var frequencyCount = [],
		i;
		for (i=0; i<list.length; i++){
			

}
	}
	listGenerator(teststring)
    $scope.message = 'hello this is the home view!'
		}
};


