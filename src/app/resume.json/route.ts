import { NextResponse } from "next/server";
import {
  personalInfo,
  aboutInfo,
  projects,
  experiences,
  skillGroups,
  educations,
  certificates,
} from "../resume";

export async function GET() {
  const resumeData = {
    personal: personalInfo,
    about: aboutInfo,
    projects,
    experiences,
    skills: skillGroups,
    certificates,
    education: educations,
  };

  return NextResponse.json(resumeData);
}
