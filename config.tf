/*
 * Terraform State persistance location.
 * Unfortunately it has to be hard coded here
 */
terraform {
  backend "s3" {
    bucket = "terraform-status"
    key    = "redirect_service.tfstate"
    # Note the terraform state file can be stored in a different region than where the api is deployed
    region = "us-east-1" 
  }
}

/*
 * Terraform AWS provider
 * This will dictate which region the Hello Lambda API is deployed
 */
provider "aws" {
  region = "us-east-1"
}

module "redirect_service" {
  source        = "./terraform"
  lambda_folder = "${path.module}/src/"
}
