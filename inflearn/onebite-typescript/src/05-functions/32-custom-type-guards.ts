type Circle = {
	kind: "circle";
	radius: number;
};

type Rectangle = {
	kind: "rectangle";
	width: number;
  radius: number;
	height: number;
};

type Shape = Circle | Rectangle;

function isCircle(shape: Shape) {
	return shape.kind === "circle";
}

function getArea(shape: Shape) {
  if ("width" in shape && "height" in shape)  {
    shape
  }

	if (isCircle(shape)) {
		return Math.PI * shape.radius * shape.radius;
	}
	return shape.width * shape.height;
}
