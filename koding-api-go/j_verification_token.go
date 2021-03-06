/* 
 * Koding API
 *
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

import (
	"time"
)

type JVerificationToken struct {

	Id string `json:"_id,omitempty"`

	Username string `json:"username,omitempty"`

	Email string `json:"email,omitempty"`

	Pin string `json:"pin,omitempty"`

	CreatedAt time.Time `json:"createdAt,omitempty"`

	Action string `json:"action,omitempty"`
}
