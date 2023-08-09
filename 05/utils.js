import Validation from "./validation.js";

const getAverageGrade = function (gradesArr) {
  Validation.setValue(gradesArr).isArray().isArrEmpty();
  gradesArr.forEach((el) => Validation.setValue(el).isNumberType());

  const result = gradesArr.reduce(
    (acc, curr, i, arr) => acc + curr / arr.length,
    0
  );

  return result;
};

export { getAverageGrade };
