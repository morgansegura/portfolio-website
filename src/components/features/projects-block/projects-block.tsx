import Image from "next/image";
import Link from "next/link";

import "./projects-block.css";
import { Button } from "@/components/ui/button/button";

export function ProjectsBlock() {
  return (
    <div className="projects-block">
      {/* Chula Vista FC */}

      <div className="grid lg:grid-cols-2 gap-x-24">
        <div>
          <h3 className="heading-3">Projects and Pro-Bono Work</h3>
          <div className="description mt-4">
            <p>
              In addition to professional work, I regularly take on pro bono
              projects to support my community and causes I believe in.
            </p>
            <p>
              I built a Single Page Application for author LeSean Johnson’s
              Nations of Stone trilogy, redesigned the official website for
              local soccer club Chula Vista FC (currently in progress), and
              continue to lead web development and marketing for a nonprofit my
              wife and I started, Grassroots Foundation, which empowers youth
              through access to elite-level training and opportunity.
            </p>
          </div>
        </div>
        <div className="project-card mt-6">
          <Image
            src="/images/projects-alj.jpg"
            alt="Author LeSean Johnson"
            width="650"
            height="300"
          />
          <div className="p-4">
            <p className="heading-sm">Project: Nations of Stone Trilogy</p>
            <p className="description">
              Created a Single Page Application (SPA) for my good friend author
              LeSean Johonson, author of the incredible Nations of Stone
              Trilogy. He wanted a Wordpress website built from scratch and
              needed it in a hurry. I was able to create the SPA in a couple of
              days, and get it up in time for Book One's release.
            </p>
            <div className="mt-4">
              <Button target="_blank" href="https://authorlj.com/">
                Official Website
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-y-6 gap-x-24 lg:grid-cols-2">
        <div className="project-card relative lg:-translate-y-1/2">
          <Image
            src="/images/projects-cvfc.jpg"
            alt="Chula Vist FC"
            width="650"
            height="300"
          />
          <span className="tag">Coming Soon</span>
          <div className="p-4">
            <p className="heading-sm">Project: Chula Vista Fúbol Club </p>
            <p className="description">
              Pro bono web reconstruction. New S.E.O and marketing campaign,
              website refresh and architecture overhaul. This is currently a
              Wordpress website, however I am nearly finished creating a custom
              CMS built with Nest.js and Next.js to replace it.
            </p>
            <div className="mt-4">
              <Button target="_blank" href="https://chulavistafc.com">
                Old Website
              </Button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <Image
            src="/images/projects-grf.jpg"
            alt="Grassroots Foundation"
            width="650"
            height="300"
          />
          <span className="tag">Work in Progress</span>
          <div className="p-4">
            <p className="heading-sm">Project: Grass Roots Foundation</p>
            <p className="description">
              A work inprogress. Grass Roots Foundation is a Nonprofit my wife
              and I started to help youth soccer players in underserved
              communities get access to fields, equipment and elite soccer
              training. At the moment there is a landing page, however I will be
              build a website with all of the "bells and whistles."
            </p>
            <div className="mt-4">
              <Button target="_blank" href="https://grassrootsfdn.org">
                Current Landing Page
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Author LJ */}

      {/* Grassroots Foundation */}
    </div>
  );
}
