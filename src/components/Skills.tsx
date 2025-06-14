import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills } from "@/data/skills";

type SkillsProps = {
  selectedSkills: string;
  onChange: (skills: string) => void;
};

export default function Skills({ selectedSkills, onChange }: SkillsProps) {
  return (
    <section className="mx-auto mt-16 md:mt-24">
      <h2 className="text-2xl md:text-3xl font-bold text-sky-800 dark:text-slate-100 mb-8 font-poppins">
        Skills
      </h2>

      <ToggleGroup
        variant="outline"
        type="single"
        value={selectedSkills}
        onValueChange={(value) => {
          if (value === selectedSkills) {
            onChange(""); // deselect if already selected
          } else {
            onChange(value);
          }
        }}
        className="grid grid-cols-6 gap-2 md:gap-4 mx-auto max-w-[850px]"
      >
        <TooltipProvider>
          {skills.map(({ label, icon }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <ToggleGroupItem
                  value={label}
                  className="relative w-12 h-12 md:w-20 md:h-20 p-2 md:p-3 rounded-lg border transition-all duration-150 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 data-[state=on]:ring-4 data-[state=on]:ring-sky-500 data-[state=on]:bg-sky-100 dark:data-[state=on]:bg-sky-800 data-[state=on]:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-700"
                >
                  <img
                    src={icon}
                    alt={label}
                    className="w-full h-full object-contain"
                  />
                </ToggleGroupItem>
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </ToggleGroup>
    </section>
  );
}
