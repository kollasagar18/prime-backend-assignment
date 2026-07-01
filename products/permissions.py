from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdminOrReadOnly(BasePermission):

    def has_permission(self, request, view):

        # Everyone who is logged in can VIEW
        if request.method in SAFE_METHODS:
            return request.user.is_authenticated

        # Only ADMIN can Create, Update and Delete
        return (
            request.user.is_authenticated
            and request.user.role == "ADMIN"
        )