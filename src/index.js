const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent ,(err)=>{
		if(err){
			console.log(err.message);
		}
		else{
			console.log("data is saved")
		}
	})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
	const data = await fs.readFile(fileName,"utf8" );
			console.log(data);
	}catch(err){
			console.log(err)
		}
	}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName,fileContent,(err)=>{
		if(err){
			console.log(err.message);
		}
		else{
			console.log("data is updated")
		}
	
	})
}


const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName,(err)=>{
		if(err){
			console.log(err.message);
		}
		else{
			console.log("file is deleted")
		}
	
	})
}

myFileWriter('file.txt','Hello ');
myFileReader('file.txt');
myFileUpdater('file.txt',' World');
myFileDeleter("file.txt");

// module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }