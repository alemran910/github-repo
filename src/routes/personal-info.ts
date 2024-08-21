type PersonalInfo = {
  name: string;
  age: number;
  nationality: string;
};

export const personalInfo = (): PersonalInfo => {
  return { name: "Alemran", age: 20, nationality: "Bangladeshi" };
};
