type Address = {
  currentAddress: string;
  permanentAddress: string;
};

export const addressInfo = (): Address => {
  return { currentAddress: "Birmingham", permanentAddress: "Bangladesh" };
};
