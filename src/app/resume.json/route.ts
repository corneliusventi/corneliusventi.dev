import { NextResponse } from "next/server";
import {
  personalInfo,
  aboutInfo,
  projects,
  experiences,
  skillGroups,
  educations,
  certificates,
  languages,
} from "../resume";

export async function GET() {
  const resumeData = {
    personal: personalInfo,
    about: aboutInfo,
    projects,
    experiences,
    skills: skillGroups,
    languages,
    certificates,
    education: educations,
  };

  return NextResponse.json(resumeData);
}
