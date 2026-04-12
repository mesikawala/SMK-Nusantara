import { createContext, useContext, useState, ReactNode } from "react";

export interface Registrant {
  id: string;
  nama: string;
  nisn: string;
  asalSekolah: string;
  email: string;
  jurusan: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: Date;
}

interface RegistrationContextType {
  registrants: Registrant[];
  addRegistrant: (data: Omit<Registrant, "id" | "status" | "createdAt">) => void;
  updateStatus: (id: string, status: "accepted" | "rejected") => void;
}

const RegistrationContext = createContext<RegistrationContextType>({
  registrants: [],
  addRegistrant: () => {},
  updateStatus: () => {},
});

export const useRegistration = () => useContext(RegistrationContext);

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const [registrants, setRegistrants] = useState<Registrant[]>([]);

  const addRegistrant = (data: Omit<Registrant, "id" | "status" | "createdAt">) => {
    setRegistrants((prev) => [
      ...prev,
      { ...data, id: crypto.randomUUID(), status: "pending", createdAt: new Date() },
    ]);
  };

  const updateStatus = (id: string, status: "accepted" | "rejected") => {
    setRegistrants((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  return (
    <RegistrationContext.Provider value={{ registrants, addRegistrant, updateStatus }}>
      {children}
    </RegistrationContext.Provider>
  );
};
