import { fileExtension, joinPaths, prependForwardSlash } from "../../../core/path.js";
import { getAssetsPrefix } from "../../utils/getAssetsPrefix.js";
function createDevUrlResolver({ base }) {
  return {
    resolve(hash) {
      return prependForwardSlash(joinPaths(base, hash));
    }
  };
}
function createBuildUrlResolver({
  base,
  assetsPrefix
}) {
  return {
    resolve(hash) {
      const prefix = assetsPrefix ? getAssetsPrefix(fileExtension(hash), assetsPrefix) : void 0;
      if (prefix) {
        return joinPaths(prefix, base, hash);
      }
      return prependForwardSlash(joinPaths(base, hash));
    }
  };
}
export {
  createBuildUrlResolver,
  createDevUrlResolver
};
