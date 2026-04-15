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
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.3,
    color: "#09090b",
  },
  header: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: -0.5,
    marginBottom: 6,
    lineHeight: 1.1,
  },
  tagline: {
    fontSize: 10.5,
    color: "#52525b",
    marginBottom: 12,
    lineHeight: 1.4,
    maxWidth: "100%",
  },
  linksContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 0,
  },
  link: {
    color: "#09090b",
    textDecoration: "none",
    fontSize: 8,
    fontFamily: "Courier",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#a1a1aa",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 10,
    fontFamily: "Courier",
    borderBottomWidth: 0.5,
    borderBottomColor: "#f4f4f5",
    paddingBottom: 4,
  },
  itemContainer: {
    marginBottom: 14,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
    gap: 10,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: "bold",
    lineHeight: 1.3,
    marginBottom: 2,
    textTransform: "uppercase",
  },
  itemMeta: {
    fontSize: 8,
    color: "#a1a1aa",
    fontFamily: "Courier",
    textAlign: "right",
  },
  itemSubtitle: {
    fontSize: 10,
    color: "#71717a",
    marginBottom: 3,
  },
  achievement: {
    fontSize: 9,
    color: "#52525b",
    marginBottom: 2,
    marginLeft: 8,
    lineHeight: 1.3,
  },
  techStack: {
    fontSize: 8,
    color: "#71717a",
    fontFamily: "Courier",
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  skillCategory: {
    marginBottom: 6,
    width: "100%",
  },
  skillText: {
    fontSize: 9,
    color: "#52525b",
    lineHeight: 1.4,
  },
  skillLabel: {
    fontWeight: "bold",
    color: "#09090b",
  },
  stackLine: {
    fontSize: 8,
    color: "#71717a",
    fontFamily: "Courier",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});

const ResumePDF = () => (
  <Document
    title={`${personalInfo.name} - Resume`}
    author={personalInfo.name}
    subject="Full Stack Engineer Resume"
    language="en"
  >
    {/* Page 1: Intro and Experience */}
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.tagline}>
          Senior Full Stack Engineer with 6+ years of experience architecting distributed Go services, 
          high-concurrency Python backends, and performant React 19 interfaces. Specialist in asynchronous ETL pipelines and AI-driven development.
        </Text>
        <View style={styles.linksContainer}>
          <Link src={personalInfo.links.portfolio} style={styles.link}>
            PORTFOLIO
          </Link>
          <Link src={personalInfo.links.github} style={styles.link}>
            GITHUB
          </Link>
          <Link src={personalInfo.links.linkedin} style={styles.link}>
            LINKEDIN
          </Link>
          <Link src={`mailto:${personalInfo.email}`} style={styles.link}>
            {personalInfo.email.toUpperCase()}
          </Link>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experiences.map((exp, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemHeader}>
              <Text style={[styles.itemTitle, { flex: 1 }]}>{exp.company}</Text>
              <Text style={styles.itemMeta}>{exp.period}</Text>
            </View>
            <Text style={styles.itemSubtitle}>
              {exp.position} • {exp.location}
            </Text>
            {exp.achievements.map((achievement, i) => (
              <View key={i} style={{ flexDirection: "row", marginBottom: 3 }}>
                <Text style={styles.achievement}>• </Text>
                <Text style={[styles.achievement, { marginLeft: 0, flex: 1 }]}>
                  {achievement}
                </Text>
              </View>
            ))}
            {exp.technologies && (
              <Text style={styles.techStack}>
                Tech: {exp.technologies.join(" / ")}
              </Text>
            )}
          </View>
        ))}
      </View>

      <View
        style={{
          marginTop: "auto",
          borderTopWidth: 0.5,
          borderTopColor: "#f4f4f5",
          paddingTop: 10,
        }}
      >
        <Text style={styles.stackLine}>
          Core Stack: TS / JS / GOLANG / PYTHON / REACT / NEXT.JS / NODE.JS /
          AWS / DOCKER / REDIS
        </Text>
      </View>
    </Page>

    {/* Page 2: Skills, Projects, Education, and Certs */}
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Expertise</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
          {skillGroups.map((group, index) => (
            <View key={index} style={[styles.skillCategory, { width: "47%" }]}>
              <Text style={styles.skillText}>
                <Text style={styles.skillLabel}>
                  {group.category.toUpperCase()}:
                </Text>
                {"\n"}
                {group.skills.join(", ")}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selected Engineering Projects</Text>
        {projects.map((project, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemHeader}>
              <Link
                src={project.href}
                style={{ textDecoration: "none", color: "#09090b", flex: 1 }}
              >
                <Text style={[styles.itemTitle, { flex: 1 }]}>
                  {project.name}
                </Text>
              </Link>
              <Text style={styles.itemMeta}>TECHNICAL CASE STUDY</Text>
            </View>
            <Text style={styles.achievement}>{project.description}</Text>
            <Text style={styles.techStack}>
              Stack: {project.tech.join(" / ")}
            </Text>
          </View>
        ))}
      </View>

      <View style={{ flexDirection: "row", gap: 40 }}>
        <View style={[styles.section, { flex: 1 }]}>
          <Text style={styles.sectionTitle}>Education</Text>
          {educations.map((edu, index) => (
            <View key={index}>
              <Text style={styles.itemTitle}>{edu.institution}</Text>
              <Text style={styles.itemSubtitle}>
                {edu.degree} • {edu.period}
              </Text>
            </View>
          ))}
        </View>

        <View style={[styles.section, { flex: 1 }]}>
          <Text style={styles.sectionTitle}>Languages</Text>
          {languages.map((lang, index) => (
            <View key={index} style={{ marginBottom: 4 }}>
              <Text style={styles.skillText}>
                <Text style={styles.skillLabel}>{lang.name}:</Text> {lang.level}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View
        style={{
          marginTop: "auto",
          borderTopWidth: 0.5,
          borderTopColor: "#f4f4f5",
          paddingTop: 15,
        }}
      >
        <Text
          style={[styles.itemMeta, { textAlign: "center", color: "#d4d4d8" }]}
        >
          © {new Date().getFullYear()} {personalInfo.name.toUpperCase()} •
          SENIOR FULL STACK ENGINEER • TYPESET IN HELVETICA & COURIER
        </Text>
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
