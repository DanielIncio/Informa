export interface CcmtptRef {
  mcodtpt: string;
}

export interface CcmfamRef {
  mcodfam: string;
}

export interface CcmclaRef {
  mcodcla: string;
}

export interface ArticuloSave {
  mcodart: string;
  mdescrip: string;
  mabrevi: string;
  munidad: string;
  ccmtpt: CcmtptRef;
  ccmfam: CcmfamRef;
  ccmcla: CcmclaRef;
}