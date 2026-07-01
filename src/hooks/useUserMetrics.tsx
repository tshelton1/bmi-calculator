"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Sex } from "@/lib/calculations";

const STORAGE_KEY = "livinghealthier_user_metrics";

export type UserMetrics = {
  heightFeet?: number;
  heightInches?: number;
  weightLb?: number;
  age?: number;
  sex?: Sex;
};

type UserMetricsForm = {
  feet: string;
  inches: string;
  weight: string;
  age: string;
  sex: Sex;
  poundsToLose: string;
};

const DEFAULTS: UserMetricsForm = {
  feet: "5",
  inches: "7",
  weight: "160",
  age: "30",
  sex: "female",
  poundsToLose: "",
};

function readStorage(): UserMetricsForm {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    const parsed = JSON.parse(raw) as Partial<UserMetricsForm>;
    return {
      feet: parsed.feet ?? DEFAULTS.feet,
      inches: parsed.inches ?? DEFAULTS.inches,
      weight: parsed.weight ?? DEFAULTS.weight,
      age: parsed.age ?? DEFAULTS.age,
      sex: parsed.sex ?? DEFAULTS.sex,
      poundsToLose: parsed.poundsToLose ?? DEFAULTS.poundsToLose,
    };
  } catch {
    return DEFAULTS;
  }
}

function writeStorage(form: UserMetricsForm) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
}

type UserMetricsContextValue = {
  feet: string;
  inches: string;
  weight: string;
  age: string;
  sex: Sex;
  poundsToLose: string;
  setFeet: (value: string) => void;
  setInches: (value: string) => void;
  setWeight: (value: string) => void;
  setAge: (value: string) => void;
  setSex: (value: Sex) => void;
  setPoundsToLose: (value: string) => void;
  reset: () => void;
};

const UserMetricsContext = createContext<UserMetricsContextValue | null>(null);

export function UserMetricsProvider({ children }: { children: ReactNode }) {
  const [metrics, setMetrics] = useState<UserMetricsForm>(DEFAULTS);

  useEffect(() => {
    setMetrics(readStorage());
  }, []);

  const update = useCallback((partial: Partial<UserMetricsForm>) => {
    setMetrics((prev) => {
      const next = { ...prev, ...partial };
      writeStorage(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setMetrics(DEFAULTS);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const value = useMemo<UserMetricsContextValue>(
    () => ({
      feet: metrics.feet,
      inches: metrics.inches,
      weight: metrics.weight,
      age: metrics.age,
      sex: metrics.sex,
      poundsToLose: metrics.poundsToLose,
      setFeet: (value) => update({ feet: value }),
      setInches: (value) => update({ inches: value }),
      setWeight: (value) => update({ weight: value }),
      setAge: (value) => update({ age: value }),
      setSex: (value) => update({ sex: value }),
      setPoundsToLose: (value) => update({ poundsToLose: value }),
      reset,
    }),
    [metrics, update, reset]
  );

  return (
    <UserMetricsContext.Provider value={value}>
      {children}
    </UserMetricsContext.Provider>
  );
}

export function useUserMetrics() {
  const context = useContext(UserMetricsContext);
  if (!context) {
    throw new Error("useUserMetrics must be used within UserMetricsProvider");
  }
  return context;
}
