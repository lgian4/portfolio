import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { allProjects, type Project } from "@/data/projects";

export default function Projects({
  selectedSkill: selectedSkill,
}: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const filteredProjects = useMemo(() => {
    if (!selectedSkill || selectedSkill == "") return allProjects;
    return allProjects.filter((p) => p.techs.includes(selectedSkill));
  }, [selectedSkill]);

  return (
    <div className="">
      <section className="mx-auto mt-16 md:mt-24">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-sky-800 dark:text-slate-100 mb-8 font-poppins"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              {...project}
            />
          ))}
        </div>
      </section>
      <Dialog
        open={selectedProject !== null && previewImg === null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="w-full max-w-[90vw] md:max-w-4xl">
          {selectedProject && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.techs.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </DialogHeader>

              <Carousel className="w-full">
                <CarouselContent>
                  {selectedProject.images.map((img: string, idx: number) => (
                    <CarouselItem key={idx}>
                      <img
                        src={img}
                        onClick={() => setPreviewImg(img)}
                        className="w-full h-60 object-contain cursor-zoom-in transition hover:opacity-80"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-50">
                {selectedProject.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {previewImg && (
        <div
          className="fixed inset-0 z-150 bg-black/80 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation(); // ← prevent it reaching the dialog behind
            setPreviewImg(null);
          }}
        >
          <img
            src={previewImg}
            alt="Preview"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-md shadow-lg"
            onClick={(e) => e.stopPropagation()} // also keep this
          />
        </div>
      )}
    </div>
  );
}

function ProjectCard({ title, thumbnail, techs, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="rounded-xl shadow-md overflow-hidden bg-slate-0 dark:bg-slate-800 cursor-pointer"
    >
      <img
        src={thumbnail}
        className="w-full aspect-video object-contain bg-white"
      />
      <div className="p-2">
        <h3 className="text-lg ">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {techs.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

type ProjectsProps = {
  selectedSkill: string;
};

type ProjectCardProps = Project & {
  onClick: () => void;
};
