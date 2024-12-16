// That code have type-checking and defining the types of data that can be passed to a controller or a Nest service.
export interface BaseModel {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateOtp {
  otp: number;
  email: string;
  expire_time: Date;
}

export interface PositionDetail {
  position_id: number;
  permission_id: number;
}

export interface StaffDetail {
  name: string;
  position_id: number;
  contact_no: string;
  email: string;
  alternative_contact_no: string;
  aadhar_card?: string;
  driving_license?: string;
  profile_image?: string;
  customer_type?: string;
  payment_type?: string;
  pan_no?: string;
  msme_registered?: boolean;
}

export interface ProductDetail {
  product_code: string;
  product_description: string;
  material_id: number;
  product_status: string;
  material_group_id: number;
  material_group_description: string;
  manufacturer_id: number;
  amount: number;
  uom: string;
  rake_no: string;
  specifications: string;
  remark: string;
  rate: number;
  quantity: number;
  minimum_quantity: number;
}

export interface PurchaseOrderDetail {
  indent_id?: number;
  auth_id?: number;
  order_date: Date;
  delivery_date: Date;
  po_status?: string;
  tax?: string;
  total_cost?: number;
}

export interface TechnicianDetail {
  technician_name: string;
  contact_no: string;
  email: string;
  alternative_contact_no: string;
  aadhar_card: string;
  driving_license: string;
}

export interface OrderDetail {
  order_type: string;
  auth_id: number;
  project_id: number;
  order_date: Date;
  expected_shipment_date: Date;
  discount_value: number;
  total_price: number;
}

export interface JobCardData {
  auth_id: number;
  technician_ids: string;
  reported_issue: string;
  job_description: string;
  warranty_start_date: Date;
  warranty_end_date: Date;
  start_date: Date;
  completion_date: Date;
  priority_level: string;
  status: string;
  store_id?: number;
  engine_no_1?: string;
  engine_no_2?: string;
  engine_no_3?: string;
  chassis_no?: string;
}

export interface FilesUploadRO {
  url: string;
  generatedFileName: string;
  originalFileName: string;
}

export interface StoreData {
  subscription_id?: number;
  store_name: string;
  email?: string;
  contact_no?: string;
}
