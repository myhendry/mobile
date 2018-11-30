import gql from "graphql-tag";

export const uploadPictureMutation = gql`
  mutation($file: Upload!) {
    uploadPicture(file: $file)
  }
`;
