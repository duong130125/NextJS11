"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const route = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "en") {
      route.push("/en");
    } else {
      route.push("/vi");
    }
  };

  return (
    <>
      <select onChange={handleChange}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <h1>{t("title")}</h1>
      <h1>{t("descripyion")}</h1>
    </>
  );
}
