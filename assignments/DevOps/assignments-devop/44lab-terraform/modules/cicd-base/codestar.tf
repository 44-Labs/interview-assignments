locals {
  connection_name_trimmed = substr("${var.full_proj_name}-github-connection", 0, 32)
  connection_name         = replace(local.connection_name_trimmed, "/-$/", "")
}

resource "aws_codestarconnections_connection" "github_connection" {
  name          = local.connection_name
  provider_type = "GitHub"

  tags = {
    Name = local.connection_name
  }
}
