import { Request, Response } from "express";

export interface User {
	token: string
	username: string
}

export interface FileData {
	// Data from Multer file object
	path: string
	size: number
	mimetype: string
	ext: string
	originalname: string

	// Data from ass
	randomId: string
	deleteId: string
	is: IsPossible
	thumbnail: string
	vibrant: string
	sha1: string
	domain: string
	timestamp: number
	timeoffset: string
	token: string
	opengraph: OpenGraphData

	// I found this in utils and idk where it comes from
	destination: string
}

export interface IsPossible {
	image: boolean
	video: boolean
	audio: boolean
	other: boolean
}

export interface OpenGraphData {
	title?: string | string[]
	description?: string | string[]
	author?: string | string[]
	authorUrl?: string | string[]
	provider?: string | string[]
	providerUrl?: string | string[]
	color?: string | string[]
}

export interface AssRequest extends Request {
	resourceId?: string
	ass?: { resourceId: string }
	token?: string
	file?: FileData
}

export interface AssResponse extends Response {

}

export interface ErrWrap extends Error {
	code?: number | string
}