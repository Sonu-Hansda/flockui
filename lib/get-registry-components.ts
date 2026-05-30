import fs from "fs";
import path from "path";

export interface RegistryComponent {
  slug: string;
  variantCount: number;
}

export function getRegistryComponents(): RegistryComponent[] {
  const registryPath = path.join(process.cwd(), "registry");

  if (!fs.existsSync(registryPath)) return [];

  const components = fs.readdirSync(registryPath).filter((item) => {
    return fs.statSync(path.join(registryPath, item)).isDirectory();
  });

  return components.map((component) => {
    const componentPath = path.join(registryPath, component);
    const variants = fs.readdirSync(componentPath).filter((item) => {
      return fs.statSync(path.join(componentPath, item)).isDirectory();
    });
    return { slug: component, variantCount: variants.length };
  });
}
