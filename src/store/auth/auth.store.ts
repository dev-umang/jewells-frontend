import { atom } from "recoil";
import { UserDTO } from "src/models/admin.model";

export const AtomUser = atom<UserDTO | null | undefined>({
  key: "atomForUser",
  default: undefined,
});
