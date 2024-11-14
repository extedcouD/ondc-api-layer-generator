import { Variable } from "../variable";
import { BinaryOperator, Operator, UnaryOperator } from "./operator-classes";

class FOLLOW_REGEX extends Operator {
	left: Variable;
	right: string;
	constructor(left: Variable, right: string) {
		super();
		this.left = left;
		this.right = right;
	}
	evaluate() {
		const regex = new RegExp(this.right);
		return this.left.values.every((v) => regex.test(v));
	}
}
class ARE_UNIQUE extends UnaryOperator {
	evaluate() {
		const valuesSet = new Set(this.operand.values);
		return valuesSet.size === this.operand.values.length;
	}
}

class ALL_IN extends BinaryOperator {
	evaluate() {
		const leftSet = new Set(this.left.values);
		return this.right.values.every((v) => leftSet.has(v));
	}
}

class ANY_IN extends BinaryOperator {
	evaluate() {
		const leftSet = new Set(this.left.values);
		return this.right.values.some((v) => leftSet.has(v));
	}
}

class NONE_IN extends BinaryOperator {
	evaluate() {
		const leftSet = new Set(this.left.values);
		return !this.right.values.some((v) => leftSet.has(v));
	}
}

class EQUAL_TO extends BinaryOperator {
	evaluate() {
		if (this.left.values.length !== this.right.values.length) return false;
		return this.left.values.every((v, i) => v === this.right.values[i]);
	}
}

export default {
	FOLLOW_REGEX,
	ARE_UNIQUE,
	ALL_IN,
	ANY_IN,
	NONE_IN,
	EQUAL_TO,
};
