import { ResolveIdHook } from 'rollup';

type ImportPath = string;
type Module = string;
type PluginOptions = Record<Module, ImportPath>;

export default function plugin(options: PluginOptions) {
  const resolveId: ResolveIdHook = source => {
    if (options[source]) {
      return { id: options[source], external: true };
    }
    return null; // other ids should be handled as usually
  };

  return {
    name: 'rollup-plugin-web-imports',
    resolveId: resolveId,
  };
}
