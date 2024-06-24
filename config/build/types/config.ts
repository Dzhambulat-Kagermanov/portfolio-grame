export type TBuildMode = 'production' | 'development'

export interface IBuildPaths {
	entry: string
	output: string
	html: string
	src: string
}

export interface IBuildOptions {
	mode: TBuildMode
	paths: IBuildPaths
	isDev?: boolean
	isProd?: boolean
	port: number
}

export interface IBuildEnv {
	port?: number
	mode?: TBuildMode
}
