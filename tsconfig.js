module.exports = {
  compilerOptions: {
    module: `commonjs`,
    target: `esnext`,
    strict: true,
    noImplicitAny: true,
    removeComments: true,
    preserveConstEnums: true,
    sourceMap: true,
    allowSyntheticDefaultImports: true,
    jsx: `react`,
    lib: [`dom`, `esnext`],
  },
  include: [`src/**/*`],
  exclude: [`node_modules`, `**/*.spec.ts`],
}
