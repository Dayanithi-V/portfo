import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { lightTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem 4rem;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 3rem;
    align-items: flex-start;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  backdrop-filter: blur(4px);
  width: min(900px, 90vw);
  padding: 3rem 3.5rem;
  z-index: 3;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2.5rem;
  font-family: "Ubuntu Mono", monospace;

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    row-gap: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Name = styled.h1`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
`;

const Tagline = styled.p`
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 400;
  line-height: 1.4;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: "";
    display: inline-block;
    width: 28px;
    height: 2px;
    background: ${(props) => props.theme.text};
  }
`;

const SectionBody = styled.div`
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
  line-height: 1.6;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.85)`};
`;

const List = styled.ul`
  margin: 0.5rem 0 0 1.25rem;
  display: grid;
  gap: 0.5rem;
  list-style: square;

  li {
    padding-left: 0.2rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PrimaryButton = styled.a`
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.text};
  padding: 0.75rem 1.75rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  color: ${(props) => props.theme.text};
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const SecondaryButton = styled.a`
  text-decoration: none;
  border: 2px dashed ${(props) => props.theme.text};
  padding: 0.75rem 1.5rem;
  border-radius: 14px;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  transition: all 0.3s ease;
  color: ${(props) => props.theme.text};

  &:hover {
    border-style: solid;
    color: ${(props) => props.theme.body};
    background: ${(props) => props.theme.text};
  }
`;

const ResumePage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Header>
            <Name>Dayanithi Rajendran</Name>
            <Tagline>
              Full-stack developer and AI engineer crafting thoughtful digital
              products with modern JavaScript, resilient architecture, and
              user-first polish.
            </Tagline>
          </Header>

          <Section>
            <SectionTitle>Profile</SectionTitle>
            <SectionBody>
              I build performant interfaces, ship production-grade features,
              and pair them with solid tooling. From component systems to data
              pipelines, I focus on maintainability, accessibility, and clean
              developer experience.
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle>Expertise</SectionTitle>
            <SectionBody>
              <List>
                <li>React, Redux Toolkit, TypeScript, Next.js</li>
                <li>Node.js APIs, Express, PostgreSQL, Prisma</li>
                <li>CI/CD workflows, automated testing, observability</li>
                <li>UX engineering, design systems, accessibility audits</li>
              </List>
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle>Highlights</SectionTitle>
            <SectionBody>
              <List>
                <li>Launched multi-tenant SaaS dashboards used by 10k+ users</li>
                <li>Scaled real-time analytics pipelines handling millions of events</li>
                <li>Mentored cross-functional teams and led codebase migrations</li>
              </List>
            </SectionBody>
          </Section>

          <Section>
            <SectionTitle>Let&apos;s Collaborate</SectionTitle>
            <SectionBody>
              Whether you need a production-ready feature, a polished prototype,
              or technical leadership on your next build, feel free to reach out
              or grab the latest resume below.
            </SectionBody>
            <ButtonRow>
              <PrimaryButton href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download PDF
              </PrimaryButton>
              <SecondaryButton href="mailto:codebucks27@gmail.com">
                Book a call
              </SecondaryButton>
            </ButtonRow>
          </Section>
        </Main>

        <BigTitle text="RESUME" top="12%" right="8%" />
      </Box>
    </ThemeProvider>
  );
};

export default ResumePage;

