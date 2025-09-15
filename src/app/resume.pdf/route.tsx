import { NextResponse } from "next/server";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import {
  personalInfo,
  aboutInfo,
  experiences,
  skillGroups,
  educations,
  languages,
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
  },
  location: {
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
    marginBottom: 4,
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
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.location}>
          {personalInfo.location}
          {" • "}
          {personalInfo.links.linkedin}
          {" • "}
          {personalInfo.links.portfolio}
        </Text>
        <Text style={styles.title}>{personalInfo.title}</Text>
        {aboutInfo.description.map((paragraph, index) => (
          <Text key={index} style={[styles.summary, { marginBottom: index < aboutInfo.description.length - 1 ? 6 : 0 }]}>
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
        {skillGroups.map((group, index) => (
          <View key={index} style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>
              <Text style={{ fontWeight: "bold" }}>{group.category}:</Text>{" "}
              {group.skills.join(", ")}
            </Text>
          </View>
        ))}
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
