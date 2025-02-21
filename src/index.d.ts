declare interface IDoctor {
  _id: string;
  tempId: string;
  num: number;
  name: string;
  conditions: string;
  experience: string;
  medications: string;
  status: "open"|"closed";
}
