import { NextResponse } from 'next/server';
import {
  personalInfo,
  aboutInfo,
  projects,
  experiences,
  skillGroups,
  educations,
} from '../../data/resume';

export async function GET() {
  const resumeData = {
    personal: personalInfo,
    about: aboutInfo,
    projects,
    experiences,
    skills: skillGroups,
    education: educations,
  };

  return NextResponse.json(resumeData);
}