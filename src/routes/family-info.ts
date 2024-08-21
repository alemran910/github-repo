type FamilyInfo = {
  fatherName: string;
  motherName: string;
  sisterName1: string;
  sisterName2: string;
};

export const familyInfo = (): FamilyInfo => {
  return {
    fatherName: "Amir",
    motherName: "Shahin",
    sisterName1: "Afsana",
    sisterName2: "Mitu",
  };
};

type FamilyMemberInfo = {
  name: string;
  placeOfBirth: string;
  languages: string[];
};

export const fatherInfo = (): FamilyMemberInfo => {
  return {
    name: "Amir",
    placeOfBirth: "Bangladesh",
    languages: ["Bangla", "Italian", "English", "Urdu"],
  };
};

export const motherInfo = (): FamilyMemberInfo => {
  return {
    name: "Shahin",
    placeOfBirth: "Bangladesh",
    languages: ["Bangla", "English"],
  };
};

export const sister1Info = (): FamilyMemberInfo => {
  return {
    name: "Afsana",
    placeOfBirth: "Italy",
    languages: ["Bangla", "English", "Urdu"],
  };
};

export const sister2Info = (): FamilyMemberInfo => {
  return {
    name: "Mitu",
    placeOfBirth: "Bangladesh",
    languages: ["Bangla", "Italian", "English", "Urdu"],
  };
};
