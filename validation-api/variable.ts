/*
  A.ALL in B // all element of A is in B => A.all(B)
  A.ANY in B // at least one element of A is in B => A.any(B)
  A.NONE in B // no element of A is in B => A.none(B)
  A.ARE_UNIQUE // all elements of A are unique => A.areUnique()
  A is B // A is equal to B => A.is(B)
  A is not B // A is not equal to B => A.isNot(B)
*/
export class Variable {
  values: string[] = [];
  constructor(values: string[]) {
    this.values = values;
  }
  public ALL_IN = (other: Variable) => {
    const otherValuesSet = new Set(other.values);
    return this.values.every((value) => otherValuesSet.has(value));
  };
  public ANY_IN = (other: Variable) => {
    const otherValuesSet = new Set(other.values);
    return this.values.some((value) => otherValuesSet.has(value));
  };
  public NONE_IN = (other: Variable) => {
    const otherValuesSet = new Set(other.values);
    return this.values.every((value) => !otherValuesSet.has(value));
  };
  public ARE_UNIQUE = () => {
    return this.values.length === new Set(this.values).size;
  };
  public IS_EQUAL_TO = (other: Variable) => {
    return this.values.join("") === other.values.join("");
  };
}
