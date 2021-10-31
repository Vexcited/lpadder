import type { StoredProjects } from "../../types/LpadderProjects";

import * as ProjectsStore from "../../utils/projectsStore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NewProjectModal from "../../components/NewProjectModal";

export default function ProjectsHome () {
  const [projects, setProjects] = useState<StoredProjects>({});
  const [showNewProjectModal, setNewProjectModal] = useState(false);

  // Show stored projects from localforage
  // at component mount.
  useEffect(() => {
    (async () => {
      const savedProjects = await ProjectsStore.getProjects();
      setProjects(savedProjects);
    })();
  }, []);

  const closeNewProjectModal = async () => {
    const savedProjects = await ProjectsStore.getProjects();
    setProjects(savedProjects);
    
    setNewProjectModal(false);
  };

  const openNewProjectModal = () => {
    setNewProjectModal(true);
  }

  return (
    <div>
      <h1>
        Projects
      </h1>

      <Link to="/">Home</Link>

      <NewProjectModal
        show={showNewProjectModal}
        closeModal={closeNewProjectModal}
      />

      <button
        onClick={openNewProjectModal}
      >
        Create a new one
      </button>

      {(Object.keys(projects).length > 0)
        ? Object.keys(projects).map(slugName =>
          <div key={slugName}>
            {slugName}: {projects[slugName].name} - {projects[slugName].author}
          </div>
        )
        : <div>
            No projects yet !
            <button
              onClick={openNewProjectModal}
            >
              Create a new one
            </button>
          </div>
      }
    </div>
  );
}
