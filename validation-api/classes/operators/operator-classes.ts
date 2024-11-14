import { Variable } from "../variable";

export abstract class Operator {
	public abstract evaluate(): boolean;
	public negateEvaluate() {
		return !this.evaluate();
	}
}

export abstract class UnaryOperator extends Operator {
	operand: Variable;
	constructor(operand: Variable) {
		super();
		this.operand = operand;
	}
}
export abstract class BinaryOperator extends Operator {
	left: Variable;
	right: Variable;
	constructor(left: Variable, right: Variable) {
		super();
		this.left = left;
		this.right = right;
	}
}
