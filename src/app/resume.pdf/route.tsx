import { NextResponse } from "next/server";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
  Link,
} from "@react-pdf/renderer";
import {
  personalInfo,
  aboutInfo,
  experiences,
  skillGroups,
  educations,
  languages,
  projects,
} from "../resume";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    borderBottomStyle: "solid",
    paddingBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    textDecoration: "underline",
  },
  email: {
    fontSize: 10,
    color: "#ff0000",
    marginBottom: 8,
  },
  links: {
    fontSize: 10,
    color: "#000000",
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  summary: {
    fontSize: 9,
    color: "#000000",
    textAlign: "justify",
    lineHeight: 1.3,
  },
  section: {
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
    marginTop: 15,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    borderBottomStyle: "solid",
    paddingBottom: 2,
  },
  experienceContainer: {
    marginBottom: 12,
  },
  companyHeader: {
    marginBottom: 4,
  },
  companyName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 1,
  },
  position: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
    fontStyle: "italic",
    marginBottom: 1,
  },
  period: {
    fontSize: 9,
    color: "#000000",
    fontStyle: "italic",
    marginBottom: 3,
  },
  achievement: {
    fontSize: 9,
    color: "#000000",
    marginBottom: 2,
    marginLeft: 8,
    lineHeight: 1.3,
  },
  skillCategory: {
    marginBottom: 6,
    width: "50%",
    paddingRight: 10,
  },
  skillCategoryTitle: {
    fontSize: 9,
    color: "#000000",
    marginBottom: 2,
  },
  skillsList: {
    fontSize: 9,
    color: "#000000",
    lineHeight: 1.2,
  },
  educationItem: {
    marginBottom: 6,
  },
  degree: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 1,
  },
  institution: {
    fontSize: 9,
    color: "#000000",
    marginBottom: 1,
  },
  educationPeriod: {
    fontSize: 9,
    color: "#000000",
    fontStyle: "italic",
  },
  languageItem: {
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  languageName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#000000",
    marginRight: 8,
  },
  languageLevel: {
    fontSize: 9,
    color: "#000000",
  },
});

const ResumePDF = () => (
  <Document
    title={`${personalInfo.name} - ${personalInfo.title}`}
    author={personalInfo.name}
    subject={`Resume of ${personalInfo.name} - ${personalInfo.title}`}
    keywords={aboutInfo.specializations.join(", ")}
    language="en"
  >
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.email}>{personalInfo.email}</Text>
        <View style={{ flexDirection: "row", marginBottom: 8 }}>
          <Link
            src={personalInfo.links.portfolio}
            style={{ color: "#000000", fontSize: 10, textDecoration: "none" }}
          >
            {personalInfo.links.portfolio.replace(/^https?:\/\//, "")}
          </Link>
          <Text style={{ fontSize: 10, marginHorizontal: 4 }}> • </Text>
          <Link
            src={personalInfo.links.linkedin}
            style={{ color: "#000000", fontSize: 10, textDecoration: "none" }}
          >
            {personalInfo.links.linkedin.replace(/^https?:\/\//, "")}
          </Link>
          <Text style={{ fontSize: 10, marginHorizontal: 4 }}> • </Text>
          <Link
            src={personalInfo.links.github}
            style={{ color: "#000000", fontSize: 10, textDecoration: "none" }}
          >
            {personalInfo.links.github.replace(/^https?:\/\//, "")}
          </Link>
        </View>
        <Text style={styles.title}>{personalInfo.title}</Text>
        {aboutInfo.description.map((paragraph, index) => (
          <Text
            key={index}
            style={[
              styles.summary,
              {
                marginBottom: index < aboutInfo.description.length - 1 ? 6 : 0,
              },
            ]}
          >
            {paragraph}
          </Text>
        ))}
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        {experiences.map((exp, index) => (
          <View
            key={index}
            style={styles.experienceContainer}
            break={index > 0 ? false : undefined}
          >
            <Text style={styles.companyName}>
              {exp.company} • {exp.location}
            </Text>
            <Text style={styles.position}>{exp.position} • Full-time</Text>
            <Text style={styles.period}>{exp.period}</Text>
            {exp.achievements.slice(0, 6).map((achievement, i) => (
              <Text key={i} style={styles.achievement}>
                • {achievement}
              </Text>
            ))}
            {exp.technologies && (
              <Text style={[styles.achievement, { fontStyle: "italic", marginTop: 2 }]}>
                Stack: {exp.technologies.join(", ")}
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Projects</Text>
        {projects.slice(0, 4).map((project, index) => (
          <View key={index} style={styles.experienceContainer} break={index > 0 ? false : undefined}>
            <Link
              src={project.href}
              style={{ textDecoration: "none" }}
            >
              <Text style={styles.companyName}>
                {project.name}
              </Text>
            </Link>
            <Text style={styles.achievement}>{project.description}</Text>
            <Text
              style={[
                styles.achievement,
                { fontStyle: "italic", marginTop: 2 },
              ]}
            >
              Stack: {project.tech.join(", ")}
            </Text>
          </View>
        ))}
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {educations.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.institution}>{edu.institution}</Text>
            <Text style={styles.educationPeriod}>{edu.period}</Text>
          </View>
        ))}
      </View>

      {/* Languages Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        {languages.map((language, index) => (
          <View key={index} style={styles.languageItem}>
            <Text style={styles.languageName}>{language.name}:</Text>
            <Text style={styles.languageLevel}>{language.level}</Text>
          </View>
        ))}
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {skillGroups.map((group, index) => (
            <View key={index} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>
                <Text style={{ fontWeight: "bold" }}>{group.category}:</Text>{" "}
                {group.skills.join(", ")}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export async function GET() {
  try {
    const pdfBuffer = await pdf(<ResumePDF />).toBuffer();

    return new NextResponse(pdfBuffer as unknown as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="corneliusventi-resume.pdf"',
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 },
    );
  }
}
