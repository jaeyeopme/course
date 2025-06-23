interface Character {
	name: string;
	speed: number;
	move(): void;
}

class Player implements Character {
	// 접근 제어자 또는 readonly 가 있다면 멤버로 간주, 없다면 단순 매개변수
	constructor(
		public name: string, // ✅ 인터페이스 구현체의 멤버는 반드시 public 으로 선언해야 함
		public speed: number,
	) {}

	move(): void {
		console.log(`${this.name} is moving at speed ${this.speed}`);
	}
}

const player1: Character = new Player("Hero", 10);
