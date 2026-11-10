import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const featuresDir = path.join(root, "testlab", "features");
const registryFile = path.join(root, "testlab", "registry.json");

const features = [];

if (fs.existsSync(featuresDir)) {
  const folders = fs.readdirSync(featuresDir, { withFileTypes: true });

  for (const folder of folders) {
    if (!folder.isDirectory()) continue;

    const featureFile = path.join(
      featuresDir,
      folder.name,
      "feature.json"
    );

    if (!fs.existsSync(featureFile)) continue;

    try {
      const feature = JSON.parse(
        fs.readFileSync(featureFile, "utf8")
      );

      features.push({
        ...feature,
        id: feature.id || folder.name
      });
    } catch (error) {
      console.error(`Fehler in ${featureFile}:`, error.message);
      process.exitCode = 1;
    }
  }
}

fs.mkdirSync(path.dirname(registryFile), { recursive: true });

fs.writeFileSync(
  registryFile,
  JSON.stringify(features, null, 2) + "\n",
  "utf8"
);

console.log(`${features.length} TestLab-Features gefunden.`);
