import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class BountyCreateDto {
  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  claimDate?: string

  @IsString()
  @IsOptional()
  issueId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class BountyUpdateDto {
  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  claimDate?: string

  @IsString()
  @IsOptional()
  issueId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
