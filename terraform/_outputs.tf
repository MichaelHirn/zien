output "aws_vpc_nzq_azs" {
  value = "${module.vpc.azs}"
}

output "aws_vpc_nzq_igw_id" {
  value = "${module.vpc.igw_id}"
}

output "aws_vpc_nzq_natgw_ids" {
  value = "${module.vpc.natgw_ids}"
}

output "aws_vpc_nzq_private_subnets" {
  value = "${module.vpc.private_subnets}"
}

output "aws_vpc_nzq_public_subnets" {
  value = "${module.vpc.public_subnets}"
}

output "aws_vpc_nzq_vpc_id" {
  value = "${module.vpc.vpc_id}"
}
