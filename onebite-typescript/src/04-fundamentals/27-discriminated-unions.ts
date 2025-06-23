type LoadingTask = {
	state: "LOADING";
};

type FailedTask = {
	state: "FAILED";
	error: {
		message: string;
	};
};

type SuccessTask = {
	state: "SUCCESS";
	response: {
		data: string;
	};
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function process(task: AsyncTask) {
	switch (task.state) {
		case "LOADING": {
			// task 객체는 LoadingTask 타입으로 좁혀짐
			console.log("LOADING");
			break;
		}
		case "FAILED": {
			// task 객체는 FailedTask 타입으로 좁혀짐
			console.error(task.error.message);
			break;
		}
		case "SUCCESS": {
			// task 객체는 SuccessTask 타입으로 좁혀짐
			console.log(task.response.data);
			break;
		}
	}
}
